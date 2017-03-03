import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    recordWeight: false
  },
  mutations: {
    setRecordWeight(state) {
      state.recordWeight = !state.recordWeight
    }
  }
})

export default store
