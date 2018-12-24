import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

interface State {
  count: number;
}

export default new Vuex.Store({
  state: {
    count: 0,
  } as State,
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
});
