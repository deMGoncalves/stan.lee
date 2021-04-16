import * as f from '@cea/f'
import schema from './schema'

const io = {}

export default (letra) =>
  new Promise((resolve) => {
    if (f.not(f.isEmpty(io[letra]))) return resolve([io[letra]])

    fetch(`https://portalmkp-api.cea-ecommerce.com.br/api/v1/produtos/marcas/?nome=${letra}`)
      .then(response => response.json())
      .then(json => f.or(json.resultado, []))
      .then(snapshot =>
        f.forEach(schema, ({ char }) =>
          (io[char] = f.filter(snapshot, marca => f.equal(marca.letra, char)))))
      .then(() => f.map(f.keys(io), (char) => io[char]))
      .then((result) =>
        f.filter(result, (i) => f.not(f.isEmpty(i))))
      .then(resolve)
      .catch(error => console.log(`[Stan Lee] Pixel / Glossario / fetchMarcas: ${error}`))
  })
