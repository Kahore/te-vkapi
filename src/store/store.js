import Vue from 'vue'
import Vuex from 'vuex'
import VKData from './modules/vkData'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    VKData
  }
})
