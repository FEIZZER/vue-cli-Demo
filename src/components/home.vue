<!--
 * @Author: xiao-jie
 * @Date: 2021-08-07 22:30:07
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-08-10 16:35:35
 * @Description: 
-->
<template>
  <el-container id="main-container">
    <el-aside id="main-aside">
        <!-- 最多允许二级菜单，，， -->
     <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            background-color="#fff" unique-opened :collapse-transition="false" :router="true" 
            :default-active="activedMenu">
        <div class="menu_box">
            <img src="../assets/logo.png" alt="" 
                style="width:200px; height:200px; border-radius:50%;" >
        </div>
        <el-menu-item index="/home/article_edit" 
        @click="changeActivedMenu('/home/article_edit')">文章编辑</el-menu-item>
        <div v-for="menu in menusList" :key="menu.id"> 
            <el-menu-item v-if="menu.children == undefined">{{menu.authName}}</el-menu-item>
            <el-submenu v-else :key="menu.id" :index="menu.id+''">
                <template slot="title">
                    <span>{{menu.authName}}</span>
                </template>
                <el-menu-item v-for="menuChild in menu.children" @click="changeActivedMenu('/home/'+menuChild.path)"
                        :index="'/home/'+menuChild.path" :key="menuChild.id+''">
                    <template slot="title" >
                        {{menuChild.authName}}
                    </template>
                </el-menu-item>
            </el-submenu>
        </div>
        
        <!-- <el-submenu v-for="item in menusList" :key="item.id" :index="item.id+''">
            <template slot="title">
                <span>{{item.authName}}</span>
            </template>
            <el-menu-item v-for="itemChild in item.children" @click="changeActivedMenu('/home/'+itemChild.path)"
                    :index="'/home/'+itemChild.path" :key="itemChild.id+''">
                <template slot="title" >
                    {{itemChild.authName}}
                </template>
            </el-menu-item>
        </el-submenu> -->
    </el-menu>
    </el-aside>
    <el-container class="el-container">
      <el-header id="main-header" >
          <div class="logout_box">
              <el-button @click="logout" type="primary">注销</el-button>
          </div>
      </el-header>
      <el-main id="main-main">
            <router-view></router-view>
      </el-main>
      <el-footer id="main-footer">footer</el-footer>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  created(){
      this.createMenuList() 
  },
  data() {
      return {
          menusList: [], 
          isCollapse: true,
          activedMenu: '/home/users',
      };
  },
  methods:{
      handleOpen() {
      },
      handleClose() {
      },
      changeCollpase() {
          this.isCollapse = !this.isCollapse
          
      },
      logout: function() {
          window.sessionStorage.removeItem('token')
          this.$router.push('/login')
      }, 
      changeActivedMenu(menuPath){
          this.activedMenu = menuPath
      },
      createMenuList: function() {
          this.$http.get('/menus')
          .then(res => {
              let data = res.data
              if (data.meta.status == 200) {
                  this.menusList = data.data
              } else {
                  this.$message({
                      type: 'error', 
                      message: data.meta.msg
                  })
              }
          })
      }
  }
}
// import '../../static/js/element-container-position'
</script>

<style scoped>
  @import '../../static/style/element-container-position-fix.css';
  #main-header{
      display: flex;
      justify-content: flex-end;
      align-items: center;
  }
  .logout_box{
  }
  el-menu{
  }
</style>
