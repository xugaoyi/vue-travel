<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.dese}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_250x250_91601e97.jpg',
          title: '南山文化旅游区',
          dese: '5A级景区'
        },
        {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_250x250_91601e97.jpg',
          title: '南山文化旅游区',
          dese: '5A级景区'
        },
        {
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_250x250_91601e97.jpg',
          title: '南山文化旅游区',
          dese: '5A级景区'
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
.item
  display flex
  height 1.9rem
  overflow hidden
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
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
    .item-button
      line-height .44rem
      margin-top .16rem
      color #fff
      background #ff9300
      padding 0 .2rem
      border-radius .06rem
</style>
