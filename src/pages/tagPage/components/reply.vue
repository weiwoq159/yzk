<template>
  <div class='reply'>
    <ul class='listSort'>
      <li v-for='item in sort'
          :key='item.id'
          :class="highLight===item.id ? 'active' : ''"
          @click="changeActive(item)"
      >{{item.name}}</li>
    </ul>
    <div class="replyMes"
         v-for='(item, index) in reply'
         :key = "index"
    >
      <el-container>
        <el-aside width="40px">
          <div class="photoImg">
            <img :src="item.fromUheadportrait" alt="">
          </div>
        </el-aside>
        <el-main>
          <div class="name">
            <p class="title">{{item.fromUname}}</p>
            <p class="date">{{item.createTimes}}</p>
          </div>
          <p class="text">{{item.content}}</p>
          <div class="bottom">
            <div class="newsBottom">
              <div class="message">
                <i class='iconfont icon-liuyan'></i>
                <span>{{item.replyNum}}</span>
              </div>
              <div
                :class="item.isStar ? 'starActive' : 'star'"
                @click='changeColor(item)'>
                <i class='iconfont icon-heart'></i>
                <span>{{item.goodUp}}</span>
              </div>
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import api from '@/api/api'
export default {
  name: 'reply',
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
      highLight: 0,
      reply: {},
      bookId: 1
    }
  },
  methods: {
    changeActive (item) {
      console.log(item.id)
      this.highLight = item.id
      switch (item.id) {
        case 0 :
          this.reply.sort(api.time)
          break
        case 1 :
          this.reply.sort(api.untime)
          break
        case 2 :
          this.reply.sort(api.goodUp)
          break
        case 3 :
          this.reply.sort(api.reply)
          break
      }
    },
    changeColor (item) {
      item.isStar = !item.isStar
      if (item.isStar) {
        item.goodUp++
      } else {
        item.goodUp--
        if (item.goodUp === 0) {
          item.goodUp = null
        }
      }
    },
    changeReply (res) {
      console.log(res)
      this.reply = res.data.data.sort(api.time)
    }
  },
  mounted () {
    this.axios.post('http://10.8.21.4:8098/web/api/comment/commentShow', {bookId: 1}).then(this.changeReply)
  }
}
</script>

<style scoped lang="stylus">
.bottom
  display: flex
  flex-direction row-reverse
  .clickNum
    margin-top 7px;
    line-height 31px;
    font-size: 10px;
    color #999
.photoImg
  img
    width 100%;
    height:100%;
    border-radius 50%
.active
  color #333!important
.reply
  background: #f8f8f8;
  padding:10px 12px;
  border-radius 25px;
.listSort
  display flex
  justify-content space-around
  padding:5px 0;
  li
    color: #aaa;
    font-size: .11rem;
.replyMes
  background: #ffffff;
  padding:15px;
.photoImg
  width 40px;
  height 40px;
  background: #000;
.name
  display flex
  justify-content space-between;
  align-items center
.title
  font-size: 14px;
  color:#333;
.date
  font-size: 10px;
  color:#aaa;
.text
  font-size: 12pt;
  color: #666;
  margin-top 9px;
main
  padding:10px 0px 0px 15px
</style>
