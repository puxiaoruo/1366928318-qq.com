<template>
  <div class="hello">
    <input type="text" v-model="value">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      value: null
    }
  },
  // 页面加载时执行
  created () {
    this.consoleDemo()
  },
  watch: {
    // 字面量名称
    value: {
      handler: 'consoleDemo'
    },
    // 创建组件时，立即执行一次
    immediate: true
  },
  methods: {
    consoleDemo () {
      console.log('我怎么这么好看')
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
