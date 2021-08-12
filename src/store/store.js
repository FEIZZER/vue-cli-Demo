/*
 * @Author: xiao-jie
 * @Date: 2021-08-12 13:18:33
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-08-12 16:07:51
 * @Description: 
 */
import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

const store = new Vuex.Store({
    state:{
        dataFromNet:{
        },
        cnt: 0,
        thing: '奥里给',
        info:{
            name: 'feizzer', 
        }
    }, 
    mutations:{
        increase(state, num) {
            if ( num == undefined) {
                num =1
            }
            state.cnt += num
        },
        getDataFromNet(state, data) {
            state.data = data
            console.log(data)
        }
    },
    actions:{
        getDataFromNet(context){
            axios.get('users',{})
            .then(res => {
                context.commit('getDataFromNet', res);
            })
            .catch(error => {
                console.error(error)
            })
        }
    }
})

export default store
