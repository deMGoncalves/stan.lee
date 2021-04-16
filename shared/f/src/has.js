import curry from './curry'
import isNil from './isNil'
import not from './not'
import or from './or'

const has = (key, target) =>
  not(isNil(target)) && or(target[key], target.hasOwnProperty(key))

export default curry(has)
