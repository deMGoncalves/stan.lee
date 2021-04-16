import arity from '@cea/f/src/arity'
import curry from '@cea/f/src/curry'

const call = (target, ...args) =>
  () => target(...args)

export default curry(arity(2, call))
