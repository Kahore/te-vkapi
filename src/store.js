import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  getters: {
    userInfo: state => {
      return state.userInfo
    }
  },
  mutations: {
    MUTATE_USER (state, payload) {
      state.user = payload
    }
  },
  actions: {
    MUTATE_USER ({ commit }, payload) {
      commit('MUTATE_USER', payload)
    }
  }
})
