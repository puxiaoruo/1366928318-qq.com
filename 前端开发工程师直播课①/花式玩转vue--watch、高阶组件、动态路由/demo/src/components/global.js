import Vue from 'vue'

function changeStr (str) {
  // toUpperCase 大写
  // 首字母转大写 abcd => Abcd
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * require: webpack Api
 * arg1: 当前目录
 * arg2: 是否找子目录
 * arg3: 以什么方式（原则）进行查找
 */
const requireComponent = require.context('.', false, /\.vue$/)

// Keys 返回上下文模块可以处理的所有数组
requireComponent.keys().forEach(fileName => {
  const config = requireComponent(fileName)

  const componentName = changeStr(
    // 匹配./下面的东西，把它替换成''
    // ./child.vue
    // fileName.replace(/^\.\//, '') ./child.vue => child.vue
    // replace(/\.\w+$/, '') child.vue => child
    fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')
  )
  console.log(componentName, 'componentName')
  Vue.component(componentName, config.default || config)
})
export default {
  requireComponent
}
