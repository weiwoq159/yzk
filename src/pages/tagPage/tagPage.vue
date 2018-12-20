<template>
  <div class="tagPage">
    <main-header></main-header>
    <labe-list></labe-list>
    <search-input></search-input>
    <keep-alive exclude="accumulationFund">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import mainHeader from '@/pages/searchPage/components/header'
import searchInput from './components/searchInput'
import labeList from './components/Label'
export default {
  name: 'tagPage',
  components: {
    mainHeader,
    searchInput,
    labeList
  },
  data () {
    return {
      list: [{
        name: '人力资源',
        link: '/hr'
      }, {
        name: '社会保障',
        link: ''
      }, {
        name: '财务税收',
        link: ''
      }, {
        name: '公积金',
        link: ''
      }, {
        name: '燚精选',
        link: ''
      }]
    }
  }
}
</script>

<style lang='stylus'>
.tagPage{
  height: 100%;
}
.newsBottom
  display: flex
  flex-direction : row-reverse
  margin-top 7px;
  font-size: 10px;
  div
    border:1px solid #666
    color: #666
    padding:3px 8px;
    border-radius 30px;
.star
  margin-right 11px;
.starActive
  margin-right:11px;
  color:red!important;
  border:1px solid red!important
</style>
