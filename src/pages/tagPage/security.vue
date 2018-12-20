<template>
  <div class="security">
    <list-temp :list='list' :height='height'></list-temp>
  </div>
</template>

<script>
import listTemp from './components/list'
import api from '@/api/api'

export default {
  name: 'security',
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
      this.list = res.data.data
      api.checkImg(this.list)
    }
  },
  mounted () {
    this.axios.post('http://106.39.102.148:9998/book/web/api/book/searchHome', {category: ''}).then(this.changeList)
  }
}
</script>

<style scoped lang='stylus'>
.security
  padding:0 .2rem
</style>
