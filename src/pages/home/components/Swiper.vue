<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swaiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
      // swiperList: [{
      //   id: '0001',
      //   imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201911/64d0b9e87e685d864add20d75c81bcc9.jpg_750x200_7a0937d7.jpg'
      // }, {
      //   id: '0002',
      //   imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/0b26e9760c2673c63c05e1efce1275ea.jpg_750x200_495c0a72.jpg'
      // }]
    }
  }
}
</script>

<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background #fff !important
.wrapper
  overflow hidden
  width 100%
  height 0
  padding-bottom 26.66%
  background #eee
  .swaiper-img
    width 100%
</style>
