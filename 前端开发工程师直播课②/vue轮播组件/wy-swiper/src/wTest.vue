<template>
  <div>
    <w-swiper v-model="selected">
      <w-swiper-item name="item1">
        <div class="item">
          <!-- <img :src="images[0]" alt=""> -->
          <img src="../src/assets/images/one.jpg" alt="">
        </div>
      </w-swiper-item>
      <w-swiper-item name="item2">
        <div class="item">
          <!-- <img :src="images[1]" alt=""> -->
          <img src="../src/assets/images/two.jpg" alt="">
        </div>
      </w-swiper-item>
      <w-swiper-item name="item3">
        <div class="item">
          <img :src="images[2]" alt="">
          <img src="../src/assets/images/three.jpg" alt="">
        </div>
      </w-swiper-item>
    </w-swiper>
  </div>
</template>
<script>
import WSwiper from '../packages/wSwiper'
import WSwiperItem from '../packages/wSwiperItem'
export default {
  name: 'WTest',
  data () {
    return {
      selected: 'item2',
      images: [
        './assets/images/one.jpg',
        './assets/images/two.jpg',
        './assets/images/three.jpg'
      ]
    }
  },
  components: {
    WSwiper,
    WSwiperItem
  },
  mounted () {
    setTimeout(() => {
      this.selected = 'item3'
    }, 3000)
  }
}
</script>
<style scoped>
.item img {
  width: 100%;
  height: 100%;
  line-height: 100%;
}
</style>
