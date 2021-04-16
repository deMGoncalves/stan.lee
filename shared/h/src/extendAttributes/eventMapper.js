import * as d from '@cea/h/src/dunders'
import * as f from '@cea/f'

export default (node, name) =>
  f.always(name)(node[d.__events__] = f.concat(f.or(node[d.__events__], []), name))
