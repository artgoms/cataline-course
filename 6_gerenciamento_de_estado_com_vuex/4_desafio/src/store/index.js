import { createStore } from 'vuex'
import { faqCategories } from '../utils/db.json'

export default createStore({
  state: {
    faqCategories: []
  },
  mutations: {
    SET_FAQ_CATEGORIES(state, dadosFaq) {
      state.faqCategories = dadosFaq
    }
  },
  actions: {
    fetchFaqCategories(context) {
      const data = faqCategories
      context.commit('SET_FAQ_CATEGORIES', data)
    }
  },
  getters: {
    $allCategories(state) {
      return state.faqCategories
    }
  }
})
