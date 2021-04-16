import always from '@cea/f/src/always'
import arity from '@cea/f/src/arity'
import curry from '@cea/f/src/curry'

const push = (x, ...y) =>
  always(x)(x.push(...y))

export default curry(arity(2, push))
