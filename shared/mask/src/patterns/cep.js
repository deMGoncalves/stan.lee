import * as f from '@cea/f'

export default (value) => 
  value.replace(/\D/g, '')
    .slice(0,8)
    .replace(/^(\d{5})(\d)/, "$1-$2")