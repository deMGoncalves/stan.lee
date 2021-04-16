import * as f from '@cea/f'

export default (productSku) => {
  const installments =  f.or(f.prop('sellers[0].commertialOffer.PaymentOptions.installmentOptions', productSku), [])
  return installments.find(item => f.prop('paymentSystem', item) === '401')
}