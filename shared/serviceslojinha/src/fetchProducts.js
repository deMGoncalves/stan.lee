export default function (productsId, indiceInicial = 0, indiceFinal = 20) {
  const urlbase = window.location.host.indexOf('localhost') > -1 ? 'https://cea.vtexcommercestable.com.br' : ''

  return fetch(`${urlbase}/api/catalog_system/pub/products/search/?fq=${productsId}&_from=${indiceInicial}&_to=${indiceFinal}`)
    .then((response) => {
      return response
    })
    .catch((...args) => console.warn('err: ', args))
}
