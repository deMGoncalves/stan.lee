import curry from '@cea/f/src/curry'

const keys = (target) =>
  Object.keys(target)

export default curry(keys)
