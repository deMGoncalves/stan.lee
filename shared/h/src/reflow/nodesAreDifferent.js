import * as f from '@cea/f'

export default (node, vNode) =>
  f.different(node.tagName, vNode.tagName)
