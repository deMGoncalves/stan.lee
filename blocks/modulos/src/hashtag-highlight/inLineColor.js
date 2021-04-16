import * as f from '@cea/f'

export default (color) => f.or(color && `color:${color}`, '')
