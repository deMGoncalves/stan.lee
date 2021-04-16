import arity from '@cea/f/src/arity'
import curry from '@cea/f/src/curry'

const frame = (target, ...args) =>
  window.requestAnimationFrame(() => target(...args))

export default curry(arity(2, frame))
