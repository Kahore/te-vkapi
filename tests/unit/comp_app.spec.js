import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '@/App.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App.vue', () => {
  it('should be a vue instance', () => {
    const wrapper = shallowMount(App, {
      localVue,
      attachToDocument: true
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
    wrapper.destroy()
  })
})
