import curry from '@cea/f/src/curry'

const filter = (target, predicate) =>
  target.filter(predicate)

export default curry(filter)
