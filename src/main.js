// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import VueRouter from  'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import test from './components/test'

import Login from './components/Login'
import index from './components/index'
import consumpDetailList from './components/consump/consumpDetailList'
import consump from './components/consump/consump'
import register from './components/register'
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

//配置路由
const router = new VueRouter({
  routes:[
    {path:'/',component:Login},
    {path:'/test',component:test},
    {path:'/index',component:index},
    {
      path:'/consump',
      component:consump,
      children:[
        {
          path:'consumpDetailList',
          component:consumpDetailList
        }      
      ]
    },
    {path:'/register',component:register}
  ],
  mode:'history'
})


/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})
