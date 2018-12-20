/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2018/12/20
* Time: 上午10:35
* name:首页导航栏组件
*/
<template>
  <div class="home">
    <div class="header">
      <p class=login>
        <i class='iconfont icon-person'></i>
        <router-link to='/'>登陆注册</router-link>
      </p>
    </div>
    <div class="logo">
      <img src="@/assets/logo.png" alt="">
    </div>
    <search></search>
    <goto></goto>
  </div>
</template>

<script>
import search from './components/search'
import goto from './components/goto'
export default {
  name: 'home',
  components: {
    search,
    goto
  }
}
</script>

<style scoped lang='stylus'>
@import '~styles/fonts/index.styl'
.header
  padding-right .12rem
.login
  text-align: right;
  color: $login
  a
    color: $login
    font-size: .12rem;
  i
    font-size: .12rem;
    line-height: .12rem;
    color: $loginIcon
.logo
  margin-top : .96rem
  margin-bottom: .31rem
  img
    display: block
    width :1.1rem
    margin:0 auto;
.search
  padding:0 .3rem
</style>
