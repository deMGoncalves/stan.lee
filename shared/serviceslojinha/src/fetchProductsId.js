import oneOff from '@cea/lojinha/src/oneOff'

export default function (engine, idUser) {
  const config = oneOff[engine]
  const url = `${config.host}/${config.products}/${config.account_id}/${idUser}`

  return fetch(url, { headers: config.headers })
    .then(response => response.json())
    .then(products => products.filter(product => !!product.id_product))
    .then(products => products.slice(0, 30))
    .then(products => products.map(product => `productId:${product.id_product}`))
    .then(products => products.join(','))
    .catch(() => '')
}
