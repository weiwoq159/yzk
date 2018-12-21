<template>
  <div class="searchInput">
    <div class="left">
      <el-select v-model="value" placeholder="请选择省市">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
    </div>
    <div class="right">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <button class='seach_button' @click="sub(value)">
        <i class='iconfont icon-search'></i>
      </button>
    </div>
  </div>
</template>

<script>
import search from '../../home/components/search'
export default {
  name: 'seachInput',
  components: {
    search
  },
  data () {
    return {
      value: '',
      input: '',
      options: []
    }
  },
  methods: {
    changeList (res) {
      console.log(res)
      this.options = res.data
    },
    // changeSeach (res) {
    //   this.$router.push()
    // },
    sub () {
      this.axios.post('/book/web/api/book/listPage', {
        category: '1',
        content: this.input,
        areaId: this.value,
        pageNum: '1',
        pageSize: '4'
      }).then(this.changeSeach)
      // this.$router.push()
      console.log(this.value)
    }
  },
  mounted () {
    this.axios.get('./static/mock/address.json').then(this.changeList)
  }

}
</script>

<style lang='stylus'>
  @import "~styles/fonts/index.styl"
  .searchInput
    height:50px;
    display flex;
    justify-content space-between
    padding:.14rem .14rem
    height:.25rem
    input
      height:.25rem
      border-radius 40px;
      padding-right:30px;
    button
      height:.25rem
      padding:0px;
    .left
      width 37%;
      i
        line-height:.25rem
    .right
      width 58%;
      position relative
      .seach_button
        position absolute;
        top:0px
        right:10px;
        background: rgba(0,0,0,0);
        color:$button
</style>
