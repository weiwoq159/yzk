import * as type from './mutationType'

const mutation = {
  [type.SET_SINGER] (state, isLogin) {
    state.isLogin = isLogin
  }
}

export default mutation
