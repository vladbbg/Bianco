export default {
  state: {
    capacity: null
  },
  mutations: {
    increment(state, value) {
      state.capacity = value
    }
  },
  getters: {
    TakeCapacity: (state) => {
      return state.capacity
    }
  }
}