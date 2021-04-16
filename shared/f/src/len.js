import curry from '@cea/f/src/curry'

const len = (x) =>
  Object.keys(x).length

export default curry(len)
