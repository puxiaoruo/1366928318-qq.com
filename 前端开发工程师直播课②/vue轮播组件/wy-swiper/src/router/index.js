import Vue from 'vue'
import Router from 'vue-router'
import WTest from '@/wTest.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WTest',
      component: WTest
    }
  ]
})
