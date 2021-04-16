import * as f from '@cea/f'
import addEventListener from './addEventListener'

export default (node) =>
  (name, listener) =>
    addEventListener(node, name, listener)
