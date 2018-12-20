/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2018/12/20
* Time: 上午10:35
* name:首页搜索组件
*/
<template>
  <div class="search">
    <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
      <el-button slot="append" icon="el-icon-search" @click='search'></el-button>
    </el-input>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      input5: ''
    }
  },
  methods: {
    search () {
      this.$router.push({name: 'searchPage', params: {name: 'maqiang'}})
    }
  }
}
</script>
<style lang='stylus'>
.search
  height:.3rem
  .input-with-select
    background: #000;
    height: .3rem
    border-radius .4rem
    input
      background: #fff;
      border-bottom-left-radius .4rem;
      border-top-left-radius .4rem
      border-right:0px;
      border-color:#aaa;
    .el-input-group__append
      background: #fff;
      border-bottom-right-radius .4rem;
      border-top-right-radius .4rem
.el-icon-search
  font-size: .19rem;
.el-input-group__append
  border-color : #aaa;
.el-button--default
  font-size: .19rem;
  border-left:0px;
.el-icon-search
  padding-left 20px
  border-left:1px solid #aaa
</style>
