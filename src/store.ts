interface StoreInput {
  state: any;
}

class Store {
  state;

  constructor({ state }: StoreInput) {
    this.state = state;
  }
}

export const store = new Store({
  state: {},
});
