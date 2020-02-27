<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      搜索城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: {
      type: String,
      default: '城市'
    }
  }
}
</script>
<!--添加scoped让样式只在这个文件中有效，不会影响其他组件-->
<style lang='stylus' scoped>
// 1rem = html设置的font-size = 50px
// 如设计图是实际像素的2倍，比如header在设计图高度是86px，实际像素是43px，则设置为0.86rem即可得到实际43px像素
@import '~styles/varibles.styl'
.header
  display flex
  line-height $headerHeight
  color #fff
  background $bgColor
  .header-left
    width .64rem
    float left
    .back-icon
      text-align center
      font-size .4rem
  .header-input
    flex 1
    height .64rem
    line-height .64rem
    color #ccc
    margin .12rem 0 0 .2rem
    padding-left .2rem
    background #fff
    border-radius .1rem
    overflow hidden
  .header-right
    color #fff
    width 1.24rem
    float right
    text-align center
    .arrow-icon
      font-size .2rem
</style>
