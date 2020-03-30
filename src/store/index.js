import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    list (state, data) {
      state.data = data
    },
    delete (state, id) {
      state.students = state.data.filter(record => (record._id !== id))
    },
    add (state, data) {
      state.students.push(data)
    }
  },
  getters: {
    data: state => state.data
  },
  actions: {
  },
  modules: {
  }
})
