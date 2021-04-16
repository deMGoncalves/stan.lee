import curry from './curry'
import magic from './magic'
import or from './or'

const value = (target) =>
  or(target[magic('f/value')], target)

export default curry(value)
