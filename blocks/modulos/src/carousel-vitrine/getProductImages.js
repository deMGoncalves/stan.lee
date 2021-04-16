import * as f from '@cea/f'
import filterProductSku from './filterProductSku'

export default (product) => 
  f.map(f.prop('images', filterProductSku(product)), image => {
    return {
      desktop: `https://cea.vteximg.com.br/arquivos/ids/${image.imageId}-333-400/${image.imageText}.jpg`,
      mobile: `https://cea.vteximg.com.br/arquivos/ids/${image.imageId}-158-189/${image.imageText}.jpg`,
      tablet: `https://cea.vteximg.com.br/arquivos/ids/${image.imageId}-200-240/${image.imageText}.jpg`
    }
  })