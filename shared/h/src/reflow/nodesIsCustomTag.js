import * as f from '@cea/f'
import isCustomTag from './isCustomTag'

export default (node, vNode) =>
  f.and(isCustomTag(node.tagName), isCustomTag(vNode.tagName))
