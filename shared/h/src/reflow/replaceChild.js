import * as f from '@cea/f'

const replaceChild = (node, vNode, parent) =>
  parent.replaceChild(vNode, node)

export default f.frame(replaceChild)
