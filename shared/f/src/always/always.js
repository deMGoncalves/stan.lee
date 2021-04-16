import curry from '@cea/f/src/curry'
import isEmpty from '@cea/f/src/isEmpty'
import magic from '@cea/f/src/magic'
import or from '@cea/f/src/or'

const always = (x) =>
  () => isEmpty(x)
    ? x
    : or(x[magic('f/always')], x)

export default curry(always)
