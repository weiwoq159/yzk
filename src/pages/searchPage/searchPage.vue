<template>
  <div class="searchPage">
    <search-header></search-header>
    <search-input @listenSonMes='showContent'></search-input>
    <search-result :list="list"></search-result>
  </div>
</template>

<script>
import searchHeader from './components/header'
import searchInput from './components/seachInput'
import searchResult from './components/searchResult'
export default {
  name: 'searchPage',
  components: {
    searchHeader,
    searchInput,
    searchResult
  },
  data () {
    return {
      list: [],
      content: '',
      input: ''
    }
  },
  methods: {
    changeSeach (res) {
      console.log(res)
      this.list = res.data.data
    },
    showContent (data) {
      this.content = data
    }
  },
  mounted () {
    // setTimeout(function () {
    //   this.input = this.route.params.name
    //   console.log(this.input)
    // }, 0)
    this.input = this.$route.params.name
    console.log(this.input)
    this.axios.post('http://10.8.21.133:8098/web/api/book/searcContent', {pageNum: '1', pageSize: '4', content: this.input}).then(this.changeSeach)
  }
}
</script>

<style scoped lang='stylus'>

</style>
