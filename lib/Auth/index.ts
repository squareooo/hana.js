import axios from "axios";
import * as jose from "jose";

import store from "../store";

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

  let uri = `https://auth.hana.ooo/oauth/authorize`;
  if (query) uri += `?${query.join("&")}`;

  location.href = uri;
};

type TokenInput = {
  grantType: "authorization_code" | "refresh_token";
  redirectUri: string;
  refreshToken?: string;
  code?: string;
  clientSecret?: string;
};

const token = async (input: TokenInput) => {
  const res = await axios.post(
    "https://xauth.hana.ooo/oauth/token",
    {
      client_id: store.state.clientId,
      grant_type: input.grantType,
      redirect_uri: input.redirectUri,
      refresh_token: input.refreshToken ?? undefined,
      code: input.code ?? undefined,
      client_secret: input.clientSecret ?? undefined,
    },
    { withCredentials: true }
  );

  return res.data;
};

type TokenInfoInput = {
  accessToken: string;
};

const tokenInfo = async (input: TokenInfoInput) => {
  const JWKS = jose.createRemoteJWKSet(
    new URL("https://xauth.hana.ooo/.well-known/jwks")
  );

  const { payload } = await jose.jwtVerify(input.accessToken, JWKS, {
    issuer: "auth.hana.ooo",
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

export default {
  authorize,
  token,
  tokenInfo,
  getAccessToken,
  getClientId,
  setAccessToken,
};
