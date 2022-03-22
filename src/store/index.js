import Vue from 'vue'
import Vuex from 'vuex'
import reserve from './reserve'
import auth from './auth'
import info from './info'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state,error){
      state.error = error
    },
    cleanError(state){
      state.error = null
    }
  },
  actions: {
  },
  modules: {
    reserve, auth, info
  },
  getters: {
    error: s => s.error
  }
})
