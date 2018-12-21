<template>
  <div class="newsList">
    <p class="newsTitle">精选推荐</p>
    <div :class="['news', index==list.length-1 ? 'lastNews' : '' ]" v-for="(item, index) in list.data" :key="index">
      <router-link :to="{name:'AFDetail',params :{bookId:item.id, name:item}}">
        <div class="title">
          <div class="essence" v-if="item.essence===1">
            <i class="iconfont icon-anonymous-iconfont"></i>
            <span>精华</span>
          </div>
          <p class="titleText">{{item.title}}</p>
        </div>
        <div class="newsText">
          <p v-html='item.content'></p>
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
</template>

<script>
export default {
  name: 'newsList',
  props: ['list'],
  methods: {
    changeColor (item) {
      item.isStar = !item.isStar
      if (item.isStar) {
        item.liked++
      } else {
        item.liked--
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
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
