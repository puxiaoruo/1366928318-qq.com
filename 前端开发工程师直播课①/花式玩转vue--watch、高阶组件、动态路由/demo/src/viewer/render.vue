<template>
  <div class="hello">
    <h1>render函数</h1>

    <!-- 此写法会造成template非常冗余 -->
    <!-- <button v-if="value == 1">1</button>
    <button v-else-if="value == 2">2</button>
    <button v-else>3</button> -->

    <!-- 使用render的写法 -->
    <Button :type="type" :text="text" @myEvent="parDemo"></Button>

    <Child></Child>
    <Child2></Child2>

  </div>
</template>

<script>
import Button from './button'
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: 1,
      type: 'danger',
      text: '报错'
    }
  },
  components: {
    Button
  },
  // 页面加载时执行
  // created () {
  //   this.consoleDemo()
  // },
  // watch: {
  //   // 字面量名称
  //   value: {
  //     handler: 'consoleDemo'
  //   },
  //   // 创建组件时，立即执行一次
  //   immediate: true
  // },
  methods: {
    // consoleDemo () {
    //   console.log('我怎么这么好看')
    // },
    parDemo () {
      console.log('父组件render')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
