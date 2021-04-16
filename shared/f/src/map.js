import curry from './curry'
import or from './or'
import magic from './magic'

const map = (target, callback) =>
  or(target[magic('f/map')], target).map(callback)

export default curry(map)
