import always from '@cea/f/src/always'
import curry from '@cea/f/src/curry'

const once = (target) =>
  (...args) =>
    always(target(...args))(target = always(undefined))

export default curry(once)
