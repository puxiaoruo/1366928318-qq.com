<template>
  <div class="w-swiper">
    <slot></slot>
  </div>
</template>
<script>
// 此处传过来的value和子组件的item一致则显示
// 插槽传值
export default {
  name: 'WSwiper',
  data () {
    return {
      selected: ''
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    value () {
      this.showEle()
    }
  },
  mounted () {
    console.log(this.value, '------')
    this.showEle()
  },
  methods: {
    showEle () {
      // 获取当前实例子组件
      const current = this.value || this.$children[0].name
      this.$children.map(vm => {
        vm.selected = this.value
      })
    }
  }
}
</script>
<style scoped>
.w-swiper {
  width: 640px;
  height: 360px;
  overflow: hidden;
  margin: 0 auto;
  border: 5px solid #dddddd;
  position: relative;
}
</style>