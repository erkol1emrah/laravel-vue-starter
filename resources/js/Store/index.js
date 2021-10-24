import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            myValue: 0
        };
    },

    actions: {

    },

    mutations: {
        increase (state, value) {
            state.myValue += value;
        },
        decrease (state, value) {
            state.myValue -= value;
        }
    },

    getters: {

    }
});

export default store;
