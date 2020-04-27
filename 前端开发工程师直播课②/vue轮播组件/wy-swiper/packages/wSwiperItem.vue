<template>
  <transition>
    <div v-show="isShow" class="w-swiper-item">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'WSwiperItem',
  data () {
    return {
      selected: ''
    }
  },
  props: {
    name: {
      type: String,
      require: true
    }
  },
  computed: {
    isShow () {
      return this.selected === this.name
    }
  },
  mounted () {
    console.log(this.name, '------')
  }
}
</script>
<style scoped>
.v-enter-active, .v-leave-active {
  transition: all 1s linear;
}
.v-leave-to {
  transform: translate(-100%);
}
.v-enter {
  transform: translate(100%);
}
.v-enter-active {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
