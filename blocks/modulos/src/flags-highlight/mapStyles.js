import * as f from '@cea/f'

export default (styles) => f.map(styles, style => `${style[0]}:${style[1]}`)