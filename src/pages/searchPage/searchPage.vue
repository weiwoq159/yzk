<template>
  <div class="searchPage">
    <search-header></search-header>
    <search-input></search-input>
    <search-result></search-result>
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
  mounted () {
    let name = this.$route.params.name
    console.log(name)
  }
}
</script>

<style scoped lang='stylus'>

</style>
