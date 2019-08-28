import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Frutas: [
      {Nombre:'Manzana', Cantidad:5},
      {Nombre:'Durazno', Cantidad:10},
      {Nombre:'Naranja', Cantidad:2},
      {Nombre:'Platano', Cantidad:7}
    ]
  },
  mutations: {
    aumentar(state, index){
      state.Frutas[index].Cantidad ++
    },
    reiniciar(state){
      state.Frutas.forEach(element => {
        element.Cantidad = 0
      });
    }
  },
  actions: {

  }
})
