import * as f from '@cea/f'

import getProductImages from './getProductImages'
import getProductInstallmentDetails from './getProductInstallmentDetails'
import getProductStock from './getProductStock'


export default (product) => {
  const installmentDetails =  getProductInstallmentDetails(product)
  
  return {
    'installmentPrice': installmentDetails.value,
    'maxInstallment': installmentDetails.count,
    'price': installmentDetails.total,
    'clusterHighlights': f.prop('clusterHighlights', product),
    'stock': getProductStock(product),
    'title': f.prop('productName', product),
    'url': f.prop('link', product),
    'urlImagesArray': getProductImages(product),
  }
}
  