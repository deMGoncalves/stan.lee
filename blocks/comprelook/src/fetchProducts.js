export default (productId) =>
    fetch(`https://cea.vtexcommercestable.com.br/api/catalog_system/pub/products/crossselling/accessories/${productId}`)
        .then(response => response.json())
        .then(skus => skus.map(sku => sku.productId))
        .then(ids => [...new Set(ids)])
        .then(ids => ids.map(id => `productId:${id}`))
        .then(ids => ids.join(','))
        .catch(error => console.log(`[Stan Lee] Pixel / Compre o Look / fetchProducts: ${error}`))