import Vuex from 'vuex'
import vkData from '../../src/store/modules/vkData'
import store from '../../src/store/store'
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(vkData)
let _store
beforeEach(() => {
  _store = new Vuex.Store({ modules: {
    vkData
  } })
})

describe('store modules wrapper', () => {
  it('should return equal quantity of modules', () => {
    expect(store.modules).toEqual(_store.modules)
  })
})
