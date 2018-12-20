<template>
  <div class="list">
    <div class='hrList'
         v-for='item in list'
         :key='item.classify'
         :style="{backgroundImage:'url(' + item.img + ')', height:height + 'rem'}"
    >
      <div class="hrTitle">
        <p>{{item.classify}}</p>
        <div class='line'></div>
      </div>
      <div class="readNum">
        <span>{{item.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  props: ['list', 'height'],
  computed: {
    ppp () {
      var b = this.list
      return b
    }
  },
  mounted () {
    console.log(this.list)
    console.log(this.ppp)
  }
}
</script>

<style scoped lang='stylus'>
.hrList
  background-size cover
  border-radius 5px;
  display flex;
  justify-content space-between;
  padding .15rem
  margin-bottom 10px;
  div
    color: #fff
    p
      font-size: .14rem;
    span
      font-size: .12rem;
      display block
      padding:2px .14rem
      border:1px solid #fff;
      border-radius 14rem
    .line
      height:3px;
      width 30px
      background: #fff;
      margin-top 6px;
      border-radius 5px;
</style>
