import * as f from '@cea/f'
export default (productId) =>
  fetch(`https://cea.vtexcommercestable.com.br/api/catalog_system/pub/products/search/?fq=productId:${productId}`)
    .then(response => response.json())
    .then(product => f.or(f.prop('productClusters', product[0]), []))
    .catch(error => console.log(`[Stan Lee] modulos / Top Bar / fetchProducts: ${error}`))
