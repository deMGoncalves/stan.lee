import * as io from '@cea/io'
import * as f from '@cea/f'

export default {
  find () {
    return new Promise((resolve) =>
      this[f.magic('environment')]()
        .then(resolve)
    )
  },
  [f.magic('cms')] () {
    return io.getOrder()
  },
  [f.magic('environment')] () {
    return ('__RUNTIME__' in window) ? this[f.magic('io')]() : this[f.magic('cms')]()
  },
  [f.magic('io')] () {
    return new Promise((resolve) =>
      resolve(JSON.parse(localStorage.getItem('orderform')))
    )
  }
}
