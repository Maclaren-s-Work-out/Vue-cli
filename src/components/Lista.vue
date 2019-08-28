<template>
  <div>
    <ul class="list-group">
      <li v-for="(item, index) of arraysort" :key="item.id" @click="aumentar(index)"
      class="list-group-item d-flex justify-content-between align-items-center">
        {{item.Nombre}}
        <span class="badge badge-primary badge-pill">{{item.Cantidad}}</span>
      </li>
    </ul>
    <button class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
  </div>
</template>
<script> 
import {mapState, mapMutations} from 'vuex';
export default {
  name: 'Lista',
  computed:{
      ...mapState(['Frutas']),
      arraysort(){
        return this.Frutas.sort((a , b) =>b.Cantidad - a.Cantidad)
      }
  },
  methods:{
      ...mapMutations(['aumentar','reiniciar'])
  }
}
</script> 