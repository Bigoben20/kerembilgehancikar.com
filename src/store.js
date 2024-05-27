// src/store.js
import { createStore } from 'vuex';
import packageJson from '../package.json';

export default createStore({
  state: {
    version: "2",
    textClass: ""
  },
  mutations: {
    setVer(state, payload) {
      state.version = payload;
    },
    setTextClass(state, payload) {
      state.textClass = payload;
    }
  },
  actions: {
    checkUrl({ commit }) {
      const url = window.location.pathname.split('/');
      const ver = url[1].includes('v')? url[1][1] : packageJson.version.split('.')[0];
      commit('setVer', ver);
    },
    setTextClass({ commit }) {
      let text = "";
      switch (this.state.version) {
        case "1":
          text = "text-neutral-200"
          break;
      
        default:
          text = "text-green-500 hover:bg-green-500 hover:text-black"
          break;
      }
      commit('setTextClass', text);
    }
  },
  getters: {
    version: (state) => state.version,
    textClass: (state) => state.textClass
  }
});
