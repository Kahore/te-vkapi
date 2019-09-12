import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VKData from '@/components/VKData.vue'
const localVue = createLocalVue()
localVue.use(Vuex)

let store
let state
let getters
let actions

beforeEach(() => {
  getters = {
    // userInfo: () => { id: '27346169', first_name: 'Konstantin', last_name: 'Golubkin', is_closed: false },
    friendList: () => [
      { id: 335871, first_name: 'Edvard', last_name: 'Sidelnikov', is_closed: false, can_access_closed: true },
      { id: 477591, first_name: 'Ekaterina', last_name: 'Zhuravleva', is_closed: true },
      { id: 520722, first_name: 'Dmitry', last_name: 'Vlasenko', is_closed: false, can_access_closed: true },
      { id: 922190, first_name: 'Leonid', last_name: 'Fomin', is_closed: false, can_access_closed: true },
      { id: 957331, first_name: 'Zurab', last_name: 'Kobaliani', is_closed: false, can_access_closed: true }],
    isAuth: () => false
  }
  actions = {
    MUTATE_USER_FRIENDS: jest.fn(),
    MUTATE_USER: jest.fn()
  }
  store = new Vuex.Store({ state, getters, actions })
})

describe('VKData.vue', () => {
  it('should be a vue instance', () => {
    const wrapper = shallowMount(VKData, {
      store,
      localVue,
      attachToDocument: true
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    wrapper.destroy()
  })
})
