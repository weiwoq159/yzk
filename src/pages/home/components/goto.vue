<template>
  <div class="list">
    <ul>
      <li v-for='(item, index) in list'
          :key='index'
          :class="index==0 ? 'active' : ''"
      >
        <router-link :to='item.link'>{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'goto',
  data () {
    return {
      list: [{
        name: '人力资源',
        link: '/tag/hr'
      }, {
        name: '社会保障',
        link: 'tag/security'
      }, {
        name: '财务税收',
        link: 'tag/taxRevenue'
      }, {
        name: '公积金',
        link: 'tag/af'
      }, {
        name: '燚精选',
        link: 'tag/selected'
      }]
    }
  }
}
</script>

<style scoped lang='stylus'>
@import '~styles/fonts/index.styl'
.active
  border-style none
  padding-left:0px
ul
  margin-top .41rem;
  display: flex
  justify-content: space-around
  padding: 0 .50rem
  li
    padding 0 .04rem
    font-size: .12rem;
    border-left:1px solid #aaa
    a
      color:$link
</style>
