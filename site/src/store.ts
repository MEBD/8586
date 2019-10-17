import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: {
      current: 'es',
      en: require('@/locale/en.json'),
      es: require('@/locale/es.json'),
      fr: require('@/locale/fr.json')
    },
    ui: {
      color: 'white',
      background: 'black',
      hideLogo: false
    }
  },
  mutations: {

  },
  actions: {

  }
})
