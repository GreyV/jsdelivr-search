import { createStore, createLogger } from 'vuex'
import packages from './package'

// eslint-disable-next-line no-undef
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules: {
    packages
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
