import * as f from '@cea/f'
export default (searchContext, to) =>
  fetch(`https://www.cea.com.br/api/catalog_system/pub/products/search/?${searchContext}&_from=1&_to=${to}`)
    .then(response => response.json())
    .then(product => f.or(product, []))
    .catch(error => console.log(`[Stan Lee] modulos / Carousel Vitrine / fetchProducts: ${error}`))
