import curry from '@cea/f/src/curry'

const find = (target, predicate) =>
  target.find(predicate)

export default curry(find)
