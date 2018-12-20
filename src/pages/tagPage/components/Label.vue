<template>
  <div class="label">
    <ul>
      <li
        v-for= '(item, index) in list'
        :key = 'index'
      >
        <router-link :to='item.link'>{{item.name}}
          <div class="line"></div>
        </router-link>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Label',
  data () {
    return {
      list: [{
        name: '人力资源',
        link: '/tag/hr'
      }, {
        name: '社会保障',
        link: '/tag/security'
      }, {
        name: '财务税收',
        link: '/tag/taxRevenue'
      }, {
        name: '公积金',
        link: '/tag/af'
      }, {
        name: '燚精选',
        link: '/tag/selected'
      }]
    }
  }
}
</script>

<style scoped lang='stylus'>
@import "~styles/fonts/index.styl"
.line
  display none
.router-link-active
  color:red
  .line
    display block
ul
  display flex;
  justify-content: space-around;
  background: #f8f8f8
  height: .35rem
  li
    line-height :.35rem
    font-size: .13rem;
    position relative
    .line
      background: red;
      width .3rem;
      height 4px;
      margin : 0 auto;
      margin-top -4px;
      border-radius 4px;
    a
      color:$link
</style>
