import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

export const store = new Vuex.Store ({
    state: {
        products: [
            {name: 'banana skin', price: 20},
            {name: 'shiny star', price: 40},
            {name: 'green shells', price: 60},
            {name: 'red shells', price: 80}
          ]
    }
})