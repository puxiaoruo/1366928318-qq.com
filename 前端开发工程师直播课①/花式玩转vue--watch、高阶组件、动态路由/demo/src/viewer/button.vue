<script>
export default {
  // 传过来的值
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    // 文字
    text: {
      type: String,
      default: 'demo'
    }
  },
  render (h) {
    // h 创建的元素
    return h('div', {
      // v-bind:class
      class: {
        btn: true,
        'btn-success': this.type === 'success',
        'btn-danger': this.type === 'danger',
        'btn-warning': this.type === 'warning'
      },
      // dom元素属性
      domProps: {
        innerText: this.text
      },
      // 传递事件
      on: {
        // 绑定事件
        click: this.demoClick
      }
    })
  },
  methods: {
    demoClick () {
      this.$emit('myEvent')
    }
  }
}
</script>
<style scoped>
.btn {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
}
.btn-success {
  background-color: green;
}
.btn-danger {
  background-color: red;
}
.btn-warning {
  background-color: orange;
}
.normal {
  background-color: blueviolet;
}
</style>
