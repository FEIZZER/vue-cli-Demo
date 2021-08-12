<!--
 * @Author: xiao-jie
 * @Date: 2021-08-10 16:26:30
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-08-12 22:33:15
 * @Description: 
-->
<template>
  <div>
    <div id="mavon">
        <mavon-editor v-model="value">
        </mavon-editor>
        
        <mavon-editor  :value="value" :subfield="false" :defaultOpen="'preview'" style="margin-top: 20px"
            :toolbarsFlag="false" :editable="false" :scrollStyle="true" :ishljs="true">
        </mavon-editor>
        <button @click="ddd">aa</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articleedit",
  data() {
    return {
      value: "# title \n ```js \n int a=1 \n ```"
    };
  },
  mounted() {
      
  },
  methods: {
      ddd(){
          console.log(this.$data.value)
      }
  }
};
</script>

<style lang="css" scoped>
</style>
