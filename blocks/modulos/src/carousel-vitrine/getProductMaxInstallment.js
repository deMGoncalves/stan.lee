import * as f from '@cea/f'
import filterPaymentMethod  from './filterPaymentMethod'
import filterProductSku from './filterProductSku'

export default (product) => {
  const skuActive = filterProductSku(product)
  const paymentMethod = filterPaymentMethod(skuActive)
  
  return paymentMethod && f.prop('[0]', f.slice(paymentMethod.installments,-1))
}