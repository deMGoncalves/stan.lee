import arity from '@cea/f/src/arity'
import curry from '@cea/f/src/curry'
import len from '@cea/f/src/len'
import push from '@cea/f/src/push'
import splice from '@cea/f/src/splice'

const aperture = (x, y, z = []) => {
  y = [...y]

  while (len(y)) { push(z, splice(y, 0, x)) }
  return z
}

export default curry(arity(2, aperture))
