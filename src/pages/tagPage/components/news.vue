<template>
  <div class='news'>
    <p class="title">{{list.title}}</p>
    <div class="detail">
      <p>来源:{{list.source}}</p>
      <p>更新时间:{{list.contentTime | dateShow}}</p>
    </div>
    <div class="text">
      <p v-html='list.content'></p>
    </div>
    <div class="bottom">
      <p class='clickNum'>点击量:{{list.clicks}}</p>
      <div class="newsBottom">
        <div class="message">
          <i class='iconfont icon-liuyan'></i>
          <span>{{list.commentNum}}</span>
        </div>
        <div :class="list.isStar ? 'starActive' : 'star'" @click='changeColor(list)'>
          <i class='iconfont icon-heart'></i>
          <span>{{list.liked}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
  props: ['list', 'bookId'],
  beforeCreate () {
    if (this.$route.params.name === undefined) {
      this.$router.push('/tag/af')
    }
  },
  data () {
    return {
      arr: [1, 2, 3, 3]
    }
  },
  methods: {
    changeColor (item) {
      item.isStar = !item.isStar
      if (item.isStar) {
        item.liked++
      } else {
        item.liked--
        if (item.liked === 0) {
          item.liked = null
        }
      }
    }
  },
  activated () {
    var that = this
    setTimeout(function () {
      this.axios.post('/book/web/api/comment/commentShow', {bookId: that.bookId}).then(this.changeNews)
    }, 0)
  }
}
</script>

<style scoped lang='stylus'>
.news
  padding:.1rem .15rem
  .title
    text-align center
    font-size: .14rem;
    color:#333;
    margin-bottom: .05rem
  .detail
    display: flex;
    justify-content space-around;
    padding 0 .3rem
    font-size: .1rem;
    color #aaa;
  .text
    margin-top .1rem
    p
      font-size: .12rem;
      color:#666;
      line-height 1.5
  .bottom
    display: flex
    justify-content space-around
    align-items center
    .clickNum
      margin-top 7px;
      font-size: 10px;
      color #999
    .lastNews
      margin-bottom 30px;
</style>
