<!--人力资源-->
<template>
  <div class="humanResources">
    <list-temp :list='list' :height='height'></list-temp>
  </div>
</template>

<script>
import listTemp from './components/list'
import api from '@/api/api'
export default {
  name: 'humanResources',
  components: {
    listTemp
  },
  data () {
    return {
      list: '',
      height: 0.85
    }
  },
  methods: {
    changeList (res) {
      console.log(res)
      this.list = res.data.data
      api.checkImg(this.list)
    }
  },
  mounted () {
    this.axios.post('/book/web/api/book/searchHome', {category: '1'}).then(this.changeList)
  }
}
</script>

<style scoped lang='stylus'>
.humanResources
  padding:0rem .2rem
.hrList
  margin-bottom 8px
</style>
