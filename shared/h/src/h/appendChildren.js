import * as f from '@cea/f'
import mapComponent from './mapComponent'
import mapTextNode from './mapTextNode'

const appendChildren = (children, node) =>
  f.always(node)(node.append(...mapTextNode(mapComponent(children))))

export default f.curry(appendChildren)
