import * as f from '@cea/f'
import filterProductSku from './filterProductSku'

export default (product) =>
  f.prop('sellers[0].commertialOffer.AvailableQuantity', filterProductSku(product))