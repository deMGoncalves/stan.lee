import * as f from '@cea/f'
import getProductMaxInstallment from './getProductMaxInstallment'

export default (product) => {
  const installmentDetails = getProductMaxInstallment(product)
  return {
    'count': f.or(f.prop('count', installmentDetails), 0),
    'value': f.or(f.prop('value', installmentDetails), 0),
    'total': f.or(f.prop('total', installmentDetails), 0),
  }
}
  