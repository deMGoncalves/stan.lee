import * as d from '@cea/h/src/dunders'
import * as f from '@cea/f'

export default (vNode) =>
  []
    .slice
    .call(f.or(vNode[d.__events__], []))
    .reduce((reducer, event) =>
      ({ ...reducer, [event]: vNode[event] }), {})
