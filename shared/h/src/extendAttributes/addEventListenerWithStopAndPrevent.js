import * as f from '@cea/f'
import addEventListener from './addEventListener'
import stopPropagation from './stopPropagation'
import preventDefault from './preventDefault'

export default (node) =>
  (name, listener) =>
    addEventListener(node, f.slice(name, 0, -13), stopPropagation(preventDefault(listener)))
