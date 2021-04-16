import * as f from '@cea/f'

const appendChild = (_, vNode, parent) =>
  parent.appendChild(vNode)

export default f.frame(appendChild)
