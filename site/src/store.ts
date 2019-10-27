import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let currentLang: string = 'en';
let hasStorage: boolean = false;
if (typeof (Storage) !== "undefined") {
  hasStorage = true;
}

if(hasStorage === false || localStorage.getItem("current_lang") === null) {
  let userLang: string = ((navigator as any).language || (navigator as any).userLanguage) as string;

  userLang = userLang.toString().substring(0, 2).toLowerCase();
  
  if (userLang === 'en' || userLang === 'es' || userLang === 'fr') {
    currentLang = userLang;
  }
} else {
  currentLang = localStorage.getItem("current_lang") as string;
}

export default new Vuex.Store({
  state: {
    locale: {
      current: currentLang,
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
  getters: {
    translate: (state: any) => {
      return state.locale[state.locale.current];
    }
  },
  mutations: {

  },
  actions: {

  }
})
