import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    opiniones: [],
  },
  getters: {
    filtrarOpiniones: (state) => (id) => {
      return state.opiniones[id];
    },
  },
  mutations: {
    guardarOpinion(state, data) {
      state.opiniones.push(data);
    },

    eliminarComentario(state, index) {
      state.opiniones.splice(index, 1);
    },

    actualizarComentario(state, data) {
      state.opiniones[data.index] = data.opinion;
    },
  },
});

export default store;
