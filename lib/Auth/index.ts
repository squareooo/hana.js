import axios from "axios"

import store from "../store"

interface AuthorizeInput {
  redirectUri: string
}

const authorize = (input: AuthorizeInput) => {
  const query = Object.entries(input).map((e) => e.join("="))

  let uri = `https://auth.hana.ooo/oauth/authorize`
  if (query[0]) uri += `?${query.join("&")}`

  location.href = uri
}

interface TokenInput {
  grantType: string
  redirectUri: string
  code: string
  clientSecret: string
}

const token = async (input: TokenInput) => {
  const res = await axios.post("https://xauth.hana.ooo/oauth/token", {
    client_id: store.state.clientId,
    grant_type: input.grantType ?? "authorization_code",
    redirect_uri: input.redirectUri,
    code: input.code,
    client_secret: input.clientSecret ?? undefined,
  })

  return res.data
}

const getAccessToken = () => {
  return store.state.accessToken
}

const setAccessToken = (accessToken: string) => {
  store.state.accessToken = accessToken
}

export default { authorize, token, getAccessToken, setAccessToken }
