import * as f from '@cea/f'

export default () => f.or(JSON.parse(f.or(localStorage.getItem('regionPostalCode'), '{}')), '')