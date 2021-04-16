import arity from '@cea/f/src/arity'
import curry from '@cea/f/src/curry'

const splice = (x, y, z, ...args) =>
  x.splice(y, z, ...args)

export default curry(arity(3, splice))
