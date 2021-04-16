import curry from '@cea/f/src/curry'
import or from '@cea/f/src/or'
import symbol from './symbol'

const magic = (key) =>
  (magic[key] = or(magic[key], symbol(key)))

export default curry(magic)
