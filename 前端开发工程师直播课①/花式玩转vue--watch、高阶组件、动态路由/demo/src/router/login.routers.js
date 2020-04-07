export default {
  path: '/login',
  name: 'login',
  // 实现懒加载
  component: () => import('../viewer/login.vue')
}
