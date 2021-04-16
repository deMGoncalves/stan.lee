import _and from './_and'
import arity from '@cea/f/src/arity'
import curry from '@cea/f/src/curry'
import reduce from '@cea/f/src/reduce'

const and = (x, ...y) =>
  reduce(y, _and, x)

export default curry(arity(2, and))
