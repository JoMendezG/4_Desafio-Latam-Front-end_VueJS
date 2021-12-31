import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    opiniones: [],
  },
  mutations: {
    guardarOpinion(state, data) {
      state.opiniones.push(data);
    },
  },
  actions: {},
  modules: {},
});
