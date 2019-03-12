import Vue from 'vue';
import Vuex from 'Vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        products: [
            { name: 'banana skin', price: 20 },
            { name: 'shiny star', price: 40 },
            { name: 'green shells', price: 60 },
            { name: 'red shells', price: 80 }
        ]
    },
    getters: {
        saleProducts: state => {

            var saleProducts = state.products.map(product => {
                return {
                    name: "**" + product.name + "**",
                    price: product.price / 2
                };
            });
            return saleProducts;

        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(function (product) {
                return product.price -= payload
            });
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function(){
                context.commit('reducePrice', payload)
            }, 300)
        }
    }
})