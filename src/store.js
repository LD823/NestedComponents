import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chickensoup: null
  },
  getters: {
    getChickenSoup: state => {
      return state.chickensoup
    }
  },
  mutations: {
    setChickenSoup: (state, payload) => {
      state.chickensoup = payload
    }
  },
  actions: {
    setChickenSoup: ({ commit }, payload) => {
      commit('setChickenSoup', payload)
    }
  }
})


