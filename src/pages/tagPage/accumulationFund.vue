/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2018/12/20
* Time: 上午10:35
* name:公积金
*/
<template>
  <div class="fund">
    <newsList
      :list="list"
      :page="page"
    ></newsList>
    <keybord></keybord>
  </div>
</template>

<script>
import bottomTemp from './components/bottomTemp'
import newsList from './components/newsList'
import keybord from './components/keybord'
export default {
  name: 'accumulationFund',
  components: {
    bottomTemp,
    newsList,
    keybord
  },
  data () {
    return {
      list: [],
      page: 'af'
    }
  },
  methods: {
    changeNews (res) {
      // this.list = res.data.data.listPageBookVO
      console.log(res.data.data)
      this.list = res.data
    }
  },
  // 获取新闻列表页面
  mounted () {
    this.axios.post('/book/web/api/fund/fundHomeDate', {pageNum: '1', pageSize: '4', category: '4'}).then(this.changeNews)
  }
}
</script>

<style scoped>

</style>
