<template>
  <div class="bottomTemp">
    <button class='release'>
      <router-link to='/'>
        发布精选
      </router-link>
    </button>
    <button class='hrSolve'>
      <router-link to='/'>
        人力资源解决方案
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: 'bottomTemp'
}
</script>

<style scoped lang='stylus'>
.bottomTemp
  display flex
  justify-content space-around
  background: #000;
  position fixed
  bottom:0px;
  width 100%;
  padding .1rem 0;
  button
    width 1.66rem;
    height:.25rem;
    border-radius 14rem
    a
      color #ffffff
.release
  background #c400000
.hrSolve
  background: #ffa200;
</style>
