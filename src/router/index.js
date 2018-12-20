import Vue from 'vue'
import Router from 'vue-router'
import homePage from '@/pages/home/home'
import searchPage from '@/pages/searchPage/searchPage'
import tagPage from '@/pages/tagPage/tagPage'
import humanResources from '@/pages/tagPage/humanResources'
import taxRevenue from '../pages/tagPage/taxRevenue'
import accumulationFund from '../pages/tagPage/accumulationFund'
import security from '../pages/tagPage/security'
import selected from '../pages/tagPage/selected'
import newDetail from '../pages/tagPage/newDetail'
import AFDetail from '../pages/tagPage/AFDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      component: searchPage
    },
    {
      path: '/tag',
      name: 'tagPage',
      component: tagPage,
      children: [{
        path: '/tag/hr',
        name: 'humanResources',
        component: humanResources
      }, {
        path: '/tag/selected',
        name: 'selected',
        component: selected
      }, {
        path: '/tag/security',
        name: 'security',
        component: security
      }, {
        path: '/tag/af',
        name: 'accumulationFund',
        component: accumulationFund
      }, {
        path: '/tag/taxRevenue',
        name: 'taxRevenue',
        component: taxRevenue
      }]
    }, {
      path: '/tag/selected/newDetail/:bookId',
      name: 'newDetail',
      component: newDetail
    },
    {
      path: '/tag/af/newDetail/:bookId',
      name: 'AFDetail',
      component: AFDetail
    }
  ]
})
