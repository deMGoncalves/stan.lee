import curry from '@cea/f/src/curry'
import reverse from '@cea/f/src/reverse'

const flip = (target) =>
  (...args) => target(...reverse(args))

export default curry(flip)
