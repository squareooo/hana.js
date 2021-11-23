import Auth from "./Auth"
import store from "./store"

interface InitInput {
  clientId: string
}

const init = (input: InitInput) => {
  store.state.clientId = input.clientId
}

export { init, Auth }
