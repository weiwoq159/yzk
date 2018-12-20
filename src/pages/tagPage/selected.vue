<template>
  <div class="fund">
    <selectList :list="list"></selectList>
    <bottom-temp></bottom-temp>
  </div>
</template>

<script>
import selectList from './components/selectedList'
import bottomTemp from './components/bottomTemp'
export default {
  name: 'accumulationFund',
  components: {
    bottomTemp,
    selectList
  },
  data () {
    return {
      list: [],
      reply: []
    }
  },
  methods: {
    changegNews (res) {
      this.list = res.data
    },
    changeReply (res) {
      console.log(res)
      this.reply = res.data.data
    }
  },
  // 获取新闻列表页面
  mounted () {
    console.log('selected 启动中')
    this.axios.get('/api/news.json').then(this.changegNews)
    // this.axios.post('http://10.8.21.4:8098/web/api/comment/commentShow', {bookId: 1}).then(this.changeReply)
  }
}
</script>

<style scoped>

</style>
