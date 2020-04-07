export default {
  path: '/index',
  name: 'index',
  // 实现懒加载
  component: () => import('../viewer/index.vue')
}
