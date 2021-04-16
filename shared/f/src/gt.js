import curry from '@cea/f/src/curry'

const gt = (value, delimiter) =>
  value > delimiter

export default curry(gt)
