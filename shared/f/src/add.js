import arity from './arity'
import always from './always'
import curry from './curry'
import magic from './magic'
import or from './or'

const __magic__ = always(magic('f/add'))

const add = (first, ...outhers) =>
  outhers.reduce((x, y) => or(x[__magic__()], x) + or(y[__magic__()], y), first)

export default curry(arity(2, add))
