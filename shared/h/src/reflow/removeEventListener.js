import * as d from '@cea/h/src/dunders'
import * as f from '@cea/f'

export default (node) =>
  f.always(node)(
    f.forEach(f.or(node[d.__events__], []), (event) =>
      (node[event] = undefined)))
