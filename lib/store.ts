interface StoreInput {
  state: any
}

class Store {
  state

  constructor({ state }: StoreInput) {
    this.state = state
  }
}

export default new Store({
  state: {},
})
