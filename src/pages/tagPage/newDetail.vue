<template>
  <div class='newDetail'>
    <main-header></main-header>
    <labe-list></labe-list>
    <keep-alive>
      <news :list='list'></news>
    </keep-alive>
    <reply></reply>
  </div>
</template>

<script>
import mainHeader from '@/pages/searchPage/components/header'
import searchInput from './components/searchInput'
import labeList from './components/Label'
import news from './components/news'
import reply from './components/reply'
export default {
  name: 'newDetail',
  components: {
    mainHeader,
    searchInput,
    labeList,
    news,
    reply
  },
  data () {
    return {
      list: ''
    }
  },
  activated () {
    this.list = this.$route.params.name
  }
}
</script>

<style scoped>

</style>
