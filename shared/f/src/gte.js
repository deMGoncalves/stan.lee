import curry from './curry'

const gte = (value, delimiter) =>
  value >= delimiter

export default curry(gte)
