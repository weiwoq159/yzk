<template>
  <div class='searchResult'>
    <div class="Result" v-if='list.length!==0'>
      <p class="newsTitle">精选推荐</p>
      <div :class="['news', index==list.length-1 ? 'lastNews' : '' ]" v-for="(item, index) in list" :key="index">
        <router-link :to="{name:'AFDetail',params :{bookId:item.id, name:item}}">
          <div class="title">
            <div class="essence" v-if="item.essence===1">
              <i class="iconfont icon-anonymous-iconfont"></i>
              <span>精华</span>
            </div>
            <p class="titleText">{{item.title}}</p>
          </div>
          <div class="newsText">
            <p>
              {{item.content}}
            </p>
          </div>
          <div class="newsFooter">
            <span>{{item.tags}}</span>
            <p>来源:{{item.source}}</p>
            <p>更新时间:{{item.contentTime | dateShow}}</p>
          </div>
        </router-link>
        <div class="newsBottom">
          <div class="message">
            <i class='iconfont icon-liuyan'></i>
            {{item.commentNum}}
          </div>
          <div :class="item.isStar ? 'starActive' : 'star'" @click='changeColor(item)'>
            <i class='iconfont icon-heart'></i>
            {{item.liked}}
          </div>
        </div>
      </div>
    </div>
    <div class="noneResult" v-if='list.length===0'>
      <img src="@/assets/rocket.png" alt="">
      <div class='resultWord'>
        <p>未搜索到相关内容</p>
        <p>试试从其他分类下进行搜索</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchResult',
  data () {
    return {
      result: []
    }
  },
  props: ['list'],
  methods: {
    changeColor (item) {
      item.isStar = !item.isStar
      if (item.isStar) {
        item.liked++
      } else {
        item.liked--
        if (item.liked === 0) {
          console.log(123)
          item.liked = null
        }
      }
    }
  },
  mounted () {
    console.log(this.list)
  }
}
</script>

<style scoped lang='stylus'>
  @import "~styles/fonts/index.styl"
.searchResult
  background:#f8f8f8;
  padding:15px;
.noneResult
  img
    display: block
    width: .25rem
    margin:.36rem auto
  p
    text-align center
    margin-top .1rem
    color: $link
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

.newsTitle
  text-align center
  margin-bottom  8px
  font-size: 14px
.newsList
  background: #f8f8f8;
  padding:10px 12px;
  border-radius 25px;
.news
  padding:12px;
  background: #fff;
  border-radius 10px;
  margin-bottom 10px;
.title
  display: flex
  align-items center
  color:#666
.essence
  padding:5px 8px;
  border-radius 20px;
  color:#fff
  font-size: 11px;
  background: #c400000;
  display inline
  margin-right 10px;
  min-width 52px;
.titleText
  font-size: 14px;
.newsText p
  margin-top .1rem
  font-size: .12rem;
  color: #666
  line-height 1.5
  text-space 2
.newsFooter
  display flex;
  justify-content space-around
  align-items center
  margin-top 15px;
  span
    border:1px solid #aaa
    padding:2px 5px;
    border-radius 10px;
  p,span
    font-size: 10px;
    color:#aaa
.lastNews
  margin-bottom 30px;

</style>
