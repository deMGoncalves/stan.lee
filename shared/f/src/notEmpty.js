import curry from './curry'
import isEmpty from './isEmpty'
import not from './not'

const notEmpty = (target) =>
  not(isEmpty(target))

export default curry(notEmpty)
