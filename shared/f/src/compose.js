import arity from '@cea/f/src/arity'
import curry from '@cea/f/src/curry'
import flip from '@cea/f/src/flip'
import reduce from '@cea/f/src/reduce'

const compose = (first, ...outhers) =>
  (...args) =>
    reduce(outhers, (x, y) => y(x), first(...args))

export default curry(arity(2, flip(compose)))
