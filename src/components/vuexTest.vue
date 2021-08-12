<!--
 * @Author: xiao-jie
 * @Date: 2021-08-12 15:01:49
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-08-12 16:04:27
 * @Description: 
-->
<template>
    <div>
        <div>{{this.$store.state.cnt}}</div>
        <div>{{cnt}}</div>
        <button @click="actionTest">button</button>
    </div>
</template>

<script>
export default {
    name: 'Vuextest',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },
    computed:{
        cnt(){
            return this.$store.state.cnt
        }
    }, 
    methods: {
        actionTest: function() {
            this.$store.dispatch('getDataFromNet')
        }
    },
};
</script>

<style lang="css" scoped>

</style>