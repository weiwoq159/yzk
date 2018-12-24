/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2018/12/24
* Time: 下午2:22
* name:release
*/
<template>
  <div class='release'>
    <div class="ReleaseTitle">
      <el-input v-model="title" placeholder="标题："></el-input>
    </div>
    <div class="drowDown">
      <div class="ReleaseTitle" @click=DropDown()>
        <el-input v-model="kind" placeholder="" :disabled="true"></el-input>
        <span> > </span>
      </div>
      <transition name="fade">
        <ul class='dropList' v-if='isDrop'>
          <li
            v-for='item in options'
            :key='item.id'
            @click='changeInput(item)'
          >
            <p>{{item.label}}</p>
          </li>
        </ul>
      </transition>
    </div>
    <div class="ReleaseContent">
      <el-input
        type="textarea"
        placeholder="正文"
        v-model="content">
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'release',
  data () {
    return {
      title: '',
      kind: '类型：',
      content: '',
      isDrop: false,
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
      }]
    }
  },
  methods: {
    DropDown () {
      this.isDrop = !this.isDrop
    },
    changeInput (item) {
      this.kind = item.label
      this.isDrop = !this.isDrop
    }
  }
}
</script>

<style lang='stylus'>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity:0;
}
.ReleaseContent
  width 100%;
  display flex;
  margin-top .15rem
  border-bottom: 1px solid #eee
  .el-textarea__inner
    border-style none;
    height:500px;
.ReleaseTitle
  width 100%;
  display flex;
  margin-top .15rem
  p
    padding-left:12px
    width 60px;
    line-height .38rem
    font-size: .14rem;
  span
    line-height .38rem
    margin-right 20px;
  .el-input
    background: #fff
    .el-input__inner
      width 100%;
      height:.38rem;
      border-style none
      background-color: #fff!important;
      color: #606266
.dropList
  padding-top:10px;
  padding-left:40px
  p
    height:20px;
    line-height 20px;
    font-size: 14px
</style>
