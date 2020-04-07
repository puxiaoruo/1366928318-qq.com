import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Render from '@/viewer/render'
// 不同的业务分成各不同的块
// import Login from './login.routers'
// import Index from './index.routers'

Vue.use(Router)

// 路由分区继续优化
const routerList = [] // 路由数组
function importAll (r) {
  console.log(r.keys(), '========')
  r.keys().forEach(
    (key) => routerList.push(r(key).default)
  )
}
importAll(require.context('./', true, /\.routers\.js/))

console.log(routerList, 'routerList')

export default new Router({
  routes: [
    // Login,
    // Index,
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/render',
      name: 'Render',
      component: Render
    },
    ...routerList // 解构的写法
  ]
})
