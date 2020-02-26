<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl">
          </div>
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门景点'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '泡温泉'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '主题乐园'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        desc: '动植物园'
      }, {
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
        desc: '海底世界'
      }, {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
        desc: '周边游hot'
      }, {
        id: '0008',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/437aad2dd0c1edb38fee0c51f8f9dd02.png',
        desc: '精彩演出'
      }, {
        id: '0009',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/3a0879f224e0aca97843bff78cabac3a.png',
        desc: '海上观光'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icon
    float left
    height 0
    width 25%
    padding-bottom 25%
    position relative
    overflow hidden
    .icon-img
      position absolute
      top 0
      right 0
      left 0
      bottom .44rem
      box-sizing border-box
      padding .1rem
      img
        display block
        margin 0 auto
        height  100%
    p
      position absolute
      right 0
      left 0
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
