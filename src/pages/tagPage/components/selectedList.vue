<template>
  <div class="newsList">
      <ul class='listSort'>
        <li v-for='item in sort'
            :key='item.id'
            v-bind:class="highLight===item.id ? 'active' : ''"
            @click="changeActive(item)"
        >{{item.name}}</li>
      </ul>
      <div :class="['news', index==list.length-1 ? 'lastNews' : '' ]" v-for="(item, index) in list" :key="index">
        <router-link :to="{name:'newDetail',params :{bookId: 1, name:item}}">
          <div class="title">
            <div class="essence" v-if="item.isEssence">
              <i class="iconfont icon-anonymous-iconfont"></i>
              <span>精华</span>
            </div>
            <p class="titleText">{{item.title}}</p>
          </div>
          <div class="newsText">
            <p>
              {{item.text | change}}
            </p>
          </div>
          <div class="newsFooter">
            <span>{{item.kind}}</span>
            <p>来源:{{item.name}}</p>
            <p>更新时间:{{item.date}}</p>
          </div>
        </router-link>
        <div class="newsBottom">
          <div class="message">
            <i class='iconfont icon-liuyan'></i>
            {{item.replay}}
          </div>
          <div :class="item.isStar ? 'starActive' : 'star'" @click='changeColor(item)'>
            <i class='iconfont icon-heart'></i>
            {{item.mark}}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'newsList',
  props: ['list', 'page'],
  data () {
    return {
      sort: [{
        name: '时间正序',
        id: 0
      }, {
        name: '时间倒序',
        id: 1
      }, {
        name: '被赞最多',
        id: 2
      }, {
        name: '评论最多',
        id: 3
      }],
      highLight: 0
    }
  },
  methods: {
    changeColor (item) {
      item.isStar = !item.isStar
      if (item.isStar) {
        item.mark++
      } else {
        item.mark--
      }
    },
    changeActive (item) {
      console.log(this.list)
      this.highLight = item.id
    }
  }
}
</script>

<style scoped lang='stylus'>
.active
  color #333!important
.listSort
  display flex
  justify-content space-around
  padding:5px 0;
  li
    color: #aaa;
    font-size: .11rem;
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
