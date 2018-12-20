let isLogin = false
try {
  if (localStorage.isLogin) {
    isLogin = localStorage.isLogin
  }
} catch (e) {

}

const state = {
  singer: 'maqiang',
  isLogin: isLogin
}

export default state
