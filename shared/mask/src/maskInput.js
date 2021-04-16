import * as f from '@cea/f'
import * as patterns from './patterns'

export default (node, pattern) => {
    const handleEventListener = {
      handleEvent: () => {
        node.value = f.prop(f.toLower(pattern), patterns)(node.value)
      }
    }
    f.map(['input', 'change'], e => node.addEventListener(e, handleEventListener) )
  }
