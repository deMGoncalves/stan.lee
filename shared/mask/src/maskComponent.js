import * as patterns from './patterns'
import * as f from '@cea/f'

export default (children, pattern) => {
    const childrenValue = f.has('0', children)
    return f.or(
        childrenValue && f.prop(f.toLower(pattern), patterns)(childrenValue), 
        childrenValue, 
        '')
  }
