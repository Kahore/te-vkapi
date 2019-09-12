import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    userAuth: {}
  },
  getters: {
    userInfo: state => {
      return state.userInfo
    },
    userAuth: state => {
      return state.userAuth
    }
  },
  mutations: {
    MUTATE_USER (state, payload) {
      state.userInfo = payload
    },
    AUTH_USER (state, payload) {
      state.userAuth = payload
    }
  },
  actions: {
    MUTATE_USER ({ commit }, payload) {
      commit('MUTATE_USER', payload)
    },
    AUTH_USER ({ commit }, payload) {
      localStorage.setItem('vk_auth', JSON.stringify(payload))
      commit('AUTH_USER', payload)
    }
  }
})
