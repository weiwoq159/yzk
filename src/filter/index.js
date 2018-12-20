import Vue from 'vue'
import {formatDate} from './time'

Vue.filter('change', function (value) {
  return value.substring(0, 80) + '...'
})

Vue.filter('dateShow', function (value) {
  let date = new Date(value)
  return formatDate(date, 'yyyy-MM-dd')
})

export default {

}
