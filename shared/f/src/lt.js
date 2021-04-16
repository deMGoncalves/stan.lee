import curry from '@cea/f/src/curry'

const lt = (value, delimiter) =>
  value < delimiter

export default curry(lt)
