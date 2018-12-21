
export default {
  time (a, b) {
    return (new Date(b.createTime)).getTime() - (new Date(a.createTime)).getTime()
  },
  untime (a, b) {
    return (new Date(a.createTime)).getTime() - (new Date(b.createTime)).getTime()
  },
  reply (a, b) {
    return b.replyNum - a.replyNum
  },
  goodUp (a, b) {
    return b.goodUp - a.goodUp
  },
  checkImg (that) {
    var listArr = that.map(function (value) {
      console.log(value)
      switch (value.classify) {
        case '办税服务' :
          value.img = 'static/mock/revenue.png'
          break
        case '法律法规' :
          value.img = './static/mock/bg.png'
          break
        case '权威解读' :
          value.img = 'static/mock/qwjd.png'
          break
        case '办税指南' :
          value.img = 'static/mock/bszn.png'
          break
        case '政策解读' :
          value.img = 'static/mock/zcjd.png'
          break
      }
      return value
    })
    console.log(listArr)
  }
}
