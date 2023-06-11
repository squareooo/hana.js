import * as jose from "jose";

import { store } from "../store";

type AuthorizeInput = {
  redirectUri: string;
};

const authorize = (input: AuthorizeInput) => {
  const query = Object.entries({
    client_id: store.state?.clientId,
    redirect_uri: input?.redirectUri,
  })
    .map((e) => (e[1] ? e.join("=") : null))
    .filter(Boolean);

  let uri = `https://${
    store.state?.authHost ?? "accounts.hana.ooo"
  }/oauth/authorize`;
  if (query) uri += `?${query.join("&")}`;

  location.href = uri;
};

type TokenInput = {
  grantType: "authorization_code" | "refresh_token";
  redirectUri?: string;
  refreshToken?: string;
  code?: string;
  clientSecret?: string;
};

const token = async (input: TokenInput) => {
  const res = await fetch(
    `https://${store.state?.authHost ?? "accounts.hana.ooo"}/api/oauth/token`,
    {
      method: "POST",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: store.state.clientId,
        grant_type: input.grantType,
        redirect_uri: input.redirectUri ?? undefined,
        refresh_token: input.refreshToken ?? undefined,
        code: input.code ?? undefined,
        client_secret: input.clientSecret ?? undefined,
      }),
    }
  );

  const jsonData = await res.json();
  return jsonData;
};

type TokenInfoInput = {
  accessToken: string;
};

const tokenInfo = async (input: TokenInfoInput) => {
  const JWKS = jose.createRemoteJWKSet(
    new URL(
      `https://${store.state?.authHost ?? "accounts.hana.ooo"}/api/oauth/jwks`
    )
  );

  const { payload } = await jose.jwtVerify(input.accessToken, JWKS, {
    issuer: store.state?.authHost ?? "accounts.hana.ooo",
  });

  return payload;
};

const getAccessToken = () => {
  return store.state.accessToken;
};

const getClientId = () => {
  return store.state.clientId;
};

const setAccessToken = (accessToken: string) => {
  store.state.accessToken = accessToken;
};

export {
  authorize,
  token,
  tokenInfo,
  getAccessToken,
  getClientId,
  setAccessToken,
};
