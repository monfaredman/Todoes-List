import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: [],
  },
  getters: {
    allTasks(state) {
      return state.tasks;
    },
  },
  mutations: {
    SET_TASKS(state, tasks) {
      state.tasks = tasks;
    },
    CARD_EXIST(state, inx) {
      state.tasks.splice(state, inx);
    },
  },
  actions: {
    fetchTasks({ commit }) {
      new Promise((resolve, reject) => {
        const response = axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        resolve(response);
        reject(console.log("Error Fetch"));
      })
        .then((response) => commit("SET_TASKS", response.data))
        .catch(() => {});
    },
  },
});

export default store;
