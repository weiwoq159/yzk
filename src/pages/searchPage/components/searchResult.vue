<template>
  <div class='searchResult'>
    <div class="noneResult" v-if='result.length===0'>
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
  }
}
</script>

<style scoped lang='stylus'>
  @import "~styles/fonts/index.styl"
.noneResult
  img
    display: block
    width: .25rem
    margin:.36rem auto
p
  text-align center
  margin-top .1rem
  color: $link
</style>
