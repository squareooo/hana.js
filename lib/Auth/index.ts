interface AuthorizeInput {
  redirectUri: string
}

const authorize = (input: AuthorizeInput) => {
  const query = Object.entries(input).map((e) => e.join("="))

  let uri = `https://auth.hana.ooo/signin`
  if (query[0]) uri += `?${query.join("&")}`

  location.href = uri
}

const getAccessToken = () => {
  console.log(1)
}

const getAppKey = () => {
  console.log(1)
}

const setAccessToken = () => {
  console.log(1)
}

export default { authorize, getAccessToken, getAppKey, setAccessToken }
