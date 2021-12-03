<template>
  <div>
      <h3>当前最新的count值为:{{count}}</h3>
      <h3>{{showNum}}</h3>
      <!-- <button @click="sub">-1</button> -->

      <button @click="clickedSub">-1</button>

      <!-- <button @click="subN(3)">-3</button> -->

      <button @click="clickedSubN">-3</button>
     
     <!-- <button  @click="subAsync">-1 Async</button> -->

      <button  @click="subCountForStepAsync">-1 Async</button>
      
      <!-- <button  @click="subNAsync(3)">-1 AsyncN</button> -->

      <button  @click="subCountForStepAsyncN">-1 AsyncN</button>
  </div>
</template>

<script>
import {mapState,mapMutations,mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return{
            
        };
    },
    computed:{
        ...mapState(['count']),
        ...mapGetters(['showNum'])
        
    },
    methods:{
        ...mapMutations(['sub','subN']),
        ...mapActions(['subAsync','subNAsync']),
        clickedSub(){
            this.sub()

        },
        clickedSubN(){
            this.subN(3)

        },
        subCountForStepAsync(){
            this.subAsync()

        },
        subCountForStepAsyncN(){
            this.subNAsync(3)

        }

    }

}
</script>

<style>

</style>