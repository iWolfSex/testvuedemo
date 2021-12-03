<template>
  <div>
      <h3>当前最新的count值为:{{$store.state.count}}</h3>
      <h3>{{$store.getters.showNum}}</h3>
      <button  @click="addCount">+1</button>
      <button  @click="addCountForStep">+3</button>
      <button  @click="addCountForStepAsync">+1 Async</button>
      <button  @click="addCountForStepAsyncN">+1 AsyncN</button>
  </div>
</template>

<script>
export default {
    data(){
        return{

        };
    },
    methods:{
        addCount(){
            this.$store.commit('add')
        },
        addCountForStep(){
            this.$store.commit('addN',3)
        },
        addCountForStepAsync(){
            this.$store.dispatch('addAsync')
        },
        addCountForStepAsyncN(){
            this.$store.dispatch('addNAsync',3)
        }

    }

}
</script>

<style>

</style>