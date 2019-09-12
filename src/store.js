import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {},
    userAuth: {},
    friendList: [],
    isAuth: false
  },
  getters: {
    userInfo: state => {
      return state.userInfo
    },
    userAuth: state => {
      return state.userAuth
    },
    friendList: state => {
      return state.friendList
    },
    isAuth: state => {
      return state.isAuth
    }
  },
  mutations: {
    MUTATE_USER (state, payload) {
      state.userInfo = payload
    },
    MUTATE_USER_FRIENDS (state, payload) {
      state.friendList = payload
    },
    AUTH_USER (state, payload) {
      state.userAuth = payload
      state.isAuth = true
    }
  },
  actions: {
    MUTATE_USER ({ commit }, payload) {
      commit('MUTATE_USER', payload.response[0])
    },
    MUTATE_USER_FRIENDS ({ commit }, payload) {
      commit('MUTATE_USER_FRIENDS', payload.response.items)
    },
    AUTH_USER ({ commit }, payload) {
      localStorage.setItem('vk_auth', JSON.stringify(payload))
      commit('AUTH_USER', payload)
    }
  }
})
