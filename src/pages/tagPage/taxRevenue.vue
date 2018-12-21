<!--财务税收-->
<template>
  <div class="tax">
    <list-temp :list='list' :height='height'></list-temp>
  </div>
</template>

<script>
import listTemp from './components/list'
import api from '@/api/api'

export default {
  name: 'taxRevenue',
  components: {
    listTemp
  },
  data () {
    return {
      list: '',
      height: 0.59
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
    this.axios.post('/book/web/api/book/searchHome', {category: '3'}).then(this.changeList)
  }
}
</script>

<style scoped>
  .tax{
    padding:0 .2rem
  }
</style>
