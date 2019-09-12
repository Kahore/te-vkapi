import vkData from '../../src/store/modules/vkData'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let auth = { 'access_token': '4e8dcd2f5be23d83dc831e34f9b74c91a2ef36366e6d77da12c0002d5d4c01ddc72e201eb08fcd32a25d5', 'user_id': '27346169' }
let userData = { response: [{ id: 27346169, first_name: 'Konstantin', last_name: 'Golubkin', is_closed: false }] }
let friendsList = { response: {
  count: 952,
  items: [
    { id: 335871, first_name: 'Edvard', last_name: 'Sidelnikov', is_closed: false, can_access_closed: true },
    { id: 477591, first_name: 'Ekaterina', last_name: 'Zhuravleva', is_closed: true },
    { id: 520722, first_name: 'Dmitry', last_name: 'Vlasenko', is_closed: false, can_access_closed: true },
    { id: 922190, first_name: 'Leonid', last_name: 'Fomin', is_closed: false, can_access_closed: true },
    { id: 957331, first_name: 'Zurab', last_name: 'Kobaliani', is_closed: false, can_access_closed: true }]
}
}
let store
beforeEach(() => {
  store = new Vuex.Store({
    state: {
      userInfo: {},
      userAuth: {},
      friendList: [],
      isAuth: false
    },
    mutations: {
      MUTATE_USER: vkData.mutations.MUTATE_USER,
      MUTATE_USER_FRIENDS: vkData.mutations.MUTATE_USER_FRIENDS,
      AUTH_USER: vkData.mutations.AUTH_USER
    },
    actions: {
      MUTATE_USER: vkData.actions.MUTATE_USER,
      MUTATE_USER_FRIENDS: vkData.actions.MUTATE_USER_FRIENDS,
      AUTH_USER: vkData.actions.AUTH_USER
    }
  })
})
describe('store.js getters', () => {
  it('should return userInfo', () => {
    expect(vkData.getters.userInfo(store.state)).toBe(store.state.userInfo)
  })
  it('should return userAuth', () => {
    expect(vkData.getters.userAuth(store.state)).toBe(store.state.userAuth)
  })
  it('should return friendList', () => {
    expect(vkData.getters.friendList(store.state)).toBe(store.state.friendList)
  })
  it('should return isAuth', () => {
    expect(vkData.getters.isAuth(store.state)).toBe(store.state.isAuth)
  })
})

describe('store.js mutations', () => {
  it('should update questionnaire', () => {
    vkData.mutations.MUTATE_USER(store.state, userData.response[0])
    expect(store.state.userInfo).toBe(userData.response[0])
  })
  it('should set array of friends', () => {
    vkData.mutations.MUTATE_USER_FRIENDS(store.state, friendsList.response.items)
    expect(store.state.friendList).toBe(friendsList.response.items)
  })
  it('should update auth', () => {
    vkData.mutations.AUTH_USER(store.state, auth)
    expect(store.state.userAuth).toBe(auth)
    expect(store.state.isAuth).toBe(true)
  })
})

describe('store.js actions', () => {
  it('test MUTATE_USER using mock mutation, but real store', () => {
    let commit = jest.fn()
    vkData.actions.MUTATE_USER({ commit }, userData)
    expect(commit).toHaveBeenCalledWith('MUTATE_USER', userData.response[0])
  })
  it('test MUTATE_USER_FRIENDS using mock mutation, but real store', () => {
    let commit = jest.fn()
    vkData.actions.MUTATE_USER_FRIENDS({ commit }, friendsList)
    expect(commit).toHaveBeenCalledWith('MUTATE_USER_FRIENDS', friendsList.response.items)
  })
  it('test AUTH_USER using mock mutation, but real store', () => {
    let commit = jest.fn()
    vkData.actions.AUTH_USER({ commit }, auth)
    expect(commit).toHaveBeenCalledWith('AUTH_USER', auth)
  })
})
