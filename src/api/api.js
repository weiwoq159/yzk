
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
        case '法律法規' :
          value.img = './static/mock/bg.png'
          break
      }
      return value
    })
    console.log(listArr)
  }
}
