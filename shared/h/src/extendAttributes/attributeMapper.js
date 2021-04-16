import * as d from '@cea/h/src/dunders'
import * as f from '@cea/f'

export default (node, key) =>
  f.always(key)(node[d.__attributes__] = f.concat(f.or(node[d.__attributes__], []), key))
