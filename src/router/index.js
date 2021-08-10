import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import UserList from '../components/user/userList.vue'

import ArticleEdit from '../components/article/articleEdit.vue'
Vue.use(Router)

let router = new Router({
  routes: [
    {path:"/login", component: Login,},
    {path:"/", redirect: '/login'},
    {path: '/home', 
     component: Home,
     redirect: '/home/users',
     children:[
       {path: "/home/article_edit", component: ArticleEdit},
       {path: "/home/users", component: UserList},
       {path: "/home/roles", component: UserList},
       {path: "/home/rights", component: UserList},
       {path: "/home/goods", component: UserList},
       {path: "/home/params", component: UserList},
       {path: "/home/categories", component: UserList},
       {path: "/home/users", component: UserList},
       {path: "/home/orders", component: UserList},
       {path: "/home/reports", component: UserList},]}, 
  ]})
router.beforeEach((to, from, next) => {
  if (to.path === '/' || to.path === '/login') {
    next()
  }
  if (to.path.indexOf('/home') == 0) {
    const token = window.sessionStorage.getItem('token')
    if (!token) next('/login')
    next()
  }
})

export default router
