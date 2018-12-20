<template>
  <div class="searchHeader">
    <div>
      <i class='iconfont icon-person'></i>
      <router-link to='/'>首页</router-link>
    </div>
    <img src="@/assets/logo.png" alt="">
    <div class="headerRight">
      <span>登陆注册</span>
      <i class='iconfont icon-person'></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header1'
}
</script>

<style scoped lang='stylus'>
@import '~styles/fonts/index.styl'
.searchHeader
  height : .34rem
  display flex
  justify-content space-between
  align-items center
  padding:8px 12px;
  img
    width : .74rem;
    height:18px;
    align-items : center;
  div
    line-height .34rem
    display : flex;
    justify-content: space-around
    align-items center
    a,span
      color: $login;
      font-size: .12rem;
    i
      line-height:.38rem
      color: $loginIcon
</style>
