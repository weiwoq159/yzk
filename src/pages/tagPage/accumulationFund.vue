/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2018/12/20
* Time: 上午10:35
* name:公积金
*/
<template>
  <div class="fund">
    <AFPic :news='news'></AFPic>
    <newsList
      :list="list"
      :page="page"
    ></newsList>
    <keybord></keybord>
  </div>
</template>

<script>
import AFPic from '@/pages/accumulationFund/components/AFPic'
import newsList from './components/newsList'
import keybord from './components/keybord'
export default {
  name: 'accumulationFund',
  components: {
    newsList,
    keybord,
    AFPic
  },
  data () {
    return {
      list: [],
      page: 'af',
      news: ''
    }
  },
  methods: {
    fundHomeDate (res) {
      // this.list = res.data.data.listPageBookVO
      console.log(res.data)
      this.list = res.data
    },
    fundHomeNews (res) {
      this.news = res.data.data
    }
  },
  // 获取公积金新闻列表页面
  mounted () {
    this.axios.post('/book/web/api/fund/fundHomeNews', {}).then(this.fundHomeNews)
    this.axios.post('/book/web/api/fund/fundHomeDate', {pageNum: '1', pageSize: '4', category: '4'}).then(this.fundHomeDate)
  }
}
</script>

<style scoped>
.fund{
  padding:12px;
}
</style>
