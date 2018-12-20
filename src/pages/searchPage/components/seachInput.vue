<template>
  <div class="searchInput">
    <div class="left">
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="right">
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <button class='seach_button'>
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
      options: [{
        value: '1',
        label: '人力资源'
      }, {
        value: '2',
        label: '社会保障'
      }, {
        value: '3',
        label: '财务税收'
      }, {
        value: '4',
        label: '公积金'
      }, {
        value: '5',
        label: '燚️精选'
      }],
      value: '',
      input: ''
    }
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
    width 40%;
    i
      line-height:.25rem
  .right
    width 50%;
    position relative
    .seach_button
      position absolute;
      top:0px
      right:10px;
      background: rgba(0,0,0,0);
      color:$button
</style>
