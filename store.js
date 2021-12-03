import Vue from "vue";
import vuex from "vuex"

Vue.use(vuex)

export default new vuex.Store({
    state:{
        count:0

    },
    //只有mutations中定义的函数，才有权利修改state中的数据
    mutations:{
        add(state){
            //mutations中不能写异步方法
            // setTimeout(() => {
            //     tate.count++
            // }, 1000);
            state.count++
        },
        addN(state,step){
            state.count += step
        },
        sub(state){
            state.count--
        },
        subN(state,step){
            state.count -= step
        }

    },
    actions:{
        addAsync(context){
            setTimeout(() => {
                //在actions中能直接调state中的数据
                //必须通过context.commit()触发某个mutation的方法
                context.commit('add')
            }, 1000);
        },
        addNAsync(context,step){
            setTimeout(() => {
                //在actions中能直接调state中的数据
                //必须通过context.commit()触发某个mutation的方法
                context.commit('addN',step)
            }, 1000);
        },
        subAsync(context){
            setTimeout(() => {
                //在actions中能直接调state中的数据
                //必须通过context.commit()触发某个mutation的方法
                context.commit('sub')
            }, 1000);
        },
        subNAsync(context,step){
            setTimeout(() => {
                //在actions中能直接调state中的数据
                //必须通过context.commit()触发某个mutation的方法
                context.commit('subN',step)
            }, 1000);
        }
    },
    getters:{
        showNum(state){
            return '当前最新的数量是【'+ state.count+'】'
        }
    }
})