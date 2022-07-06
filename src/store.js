import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    auth: '',
    user: {},
    repos: []
  },
  getters: {
    getAuth(state){
      return state.auth
    },
    getUser(state){
      return state.user
    },
    getRepos(state){
      return state.repos
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.auth = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    setRepos(state, payload) {
      state.repos = payload
    },
  },
  actions: {
    setAuth(store, payload) {
      store.commit('setAuth', payload)
    },
    setUser(store, payload) {
      store.commit('setUser', payload)
    },
    setRepos(store, payload) {
      store.commit('setRepos', payload)
    },
  },
  strict: process.env.NODE_ENV !== 'production'
})
