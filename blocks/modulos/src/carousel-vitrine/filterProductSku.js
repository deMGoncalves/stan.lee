import * as f from '@cea/f'

export default (product) => 
  f.or(
    f.prop('items', product).find(item => f.prop('sellers[0].commertialOffer.AvailableQuantity', item) > 0), 
    f.prop('items[0]', product)
  )