import * as f from '@cea/f'

export default (styles) => f.filter(f.entries(styles), style => f.notEmpty(f.prop('[1]', style)))

