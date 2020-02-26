<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.dese}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/3e/a588a413145dbe.jpg_r_640x214_b3729b6e.jpg',
          title: '小清新帆船出海',
          dese: '完整体验驾驶帆船出海的乐趣，感受不一样的海上休闲，体验无限驰骋的空间'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/3e/a588a413145dbe.jpg_r_640x214_b3729b6e.jpg',
          title: '小清新帆船出海',
          dese: '完整体验驾驶帆船出海的乐趣，感受不一样的海上休闲，体验无限驰骋的空间'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/3e/a588a413145dbe.jpg_r_640x214_b3729b6e.jpg',
          title: '小清新帆船出海',
          dese: '完整体验驾驶帆船出海的乐趣，感受不一样的海上休闲，体验无限驰骋的空间'
        }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.title
  margin-top .2rem
  line-height .6rem
  background #eee
  text-indent .2rem
.item-img-wraper
  overflow hidden
  height 0
  padding-bottom 33.9%
.item-img
  width 100%
.item-info
  padding .1rem
  min-width: 0;
  .item-title
    line-height .54rem
    font-size .32rem
    ellipsis()
  .item-desc
    line-height .4rem
    color #999
    ellipsis()
</style>
