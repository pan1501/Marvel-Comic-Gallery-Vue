import Vue from 'vue'
import Vuex from 'vuex'

import { state } from './vuex/state.js'
import { getters } from './vuex/getters.js'
import { mutations } from './vuex/mutations.js'
import { actions } from './vuex/actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state
})
