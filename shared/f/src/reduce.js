import curry from '@cea/f/src/curry'

const reduce = (x, y, z) =>
  x.reduce(y, z)

export default curry(reduce)
