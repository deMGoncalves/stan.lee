import * as f from '@cea/f'

export default f.compose(f.test(/function/), f.typeOf)
