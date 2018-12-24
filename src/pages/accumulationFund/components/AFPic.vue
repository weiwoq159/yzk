/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2018/12/24
* Time: 下午4:19
* name:
*/
<template>
  <div class='AFPic'>
    <ul class='AFPicList'>
      <li
        v-for="(item, index) in news"
        :key='index'
        :style="{backgroundImage:'url(' + item.img + ')'}"
      >
        <span>1{{item.category}}</span>
        <p>{{item.classify}}</p>
        <div class='bottomLine'></div>
      </li>
      <div class="clear"></div>
    </ul>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  name: 'AFPic',
  props: ['news'],
  watch: {
    news (newVal, oldVal) {
      api.checkAFPic(newVal)
      console.log(newVal)
    }
  }
}
</script>

<style scoped lang='stylus'>
.clear {
  clear both
}
.AFPicList
  width 100%;
  li
    width: 110px;
    height:100px;
    background: #000;
    margin-bottom 10px;
    background-size cover
    float left;
    margin-left 10px;
    margin-bottom 15px;
    border-radius 4px
    span
      width 40px;
      border-radius 4px;
      background: #c40000;
      color: #fff
      display block
      text-align center;
    p
      text-align center;
      position relative;
      top:30%
      color:#fff;
    .bottomLine
      width .3rem;
      height:4px;
      border-radius 4px;
      background: #c40000;
      margin 0 auto
      position relative
      top:35%;
</style>
