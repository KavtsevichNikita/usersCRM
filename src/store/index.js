import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        //можем хранить данные 

        message : 'hello vuex'
    },
    mutations : {
        //изменяет наш state

        setMessage (state, message) {
            state.message = message
        }
    },
    actions : {
        // изменяем state, но не напрямую, а через mutations
        setMessage ({commit}, payload) {
            commit('setMessage', payload)
        }
    },
    getters : {
        //забираем значение
        
        getMessage (state) {
            return state.message
        }
    },
})