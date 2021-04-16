import Sku from './sku'
import getConditions from './getConditions'
import * as f from '@cea/f'

const snapshot = window.skuJson ? window.skuJson.skus : [
  {
    sku: 2523833,
    skuname: 'PP',
    dimensions: {
      Cor: 'Vermelho',
      Tamanhooo: 'PP'
    },
    available: true,
    availablequantity: 2,
    cacheVersionUsedToCallCheckout: 'a950e722087960384cb3ab4a0915063b_',
    listPriceFormated: 'R$ 0,00',
    listPrice: 0,
    taxFormated: 'R$ 0,00',
    taxAsInt: 0,
    bestPriceFormated: 'R$ 219,99',
    bestPrice: 21999,
    spotPrice: 21999,
    installments: 6,
    installmentsValue: 3666,
    installmentsInsterestRate: 0,
    image: 'https://cea.vteximg.com.br/arquivos/ids/9210632-450-540/Jaqueta-Feminina-Puffer-com-Capuz-Vermelha-9361803-Vermelho_1.jpg?v=636922459973830000',
    sellerId: '1',
    seller: 'CeA',
    measures: {
      cubicweight: 1,
      height: 10,
      length: 25,
      weight: 556,
      width: 10
    },
    unitMultiplier: 1,
    rewardValue: 0,
    values: [
      'Vermelho',
      'PP'
    ]
  },
  {
    sku: 2523834,
    skuname: 'P',
    dimensions: {
      Cor: 'Vermelho',
      Tamanho: 'P'
    },
    available: false,
    availablequantity: 0,
    cacheVersionUsedToCallCheckout: null,
    listPriceFormated: 'R$ 0,00',
    listPrice: 0,
    taxFormated: 'R$ 0,00',
    taxAsInt: 0,
    bestPriceFormated: 'R$ 9.999.876,00',
    bestPrice: 999987600,
    spotPrice: 999987600,
    installments: 0,
    installmentsValue: 0,
    installmentsInsterestRate: null,
    image: 'https://cea.vteximg.com.br/arquivos/ids/9210632-450-540/Jaqueta-Feminina-Puffer-com-Capuz-Vermelha-9361803-Vermelho_1.jpg?v=636922459973830000',
    sellerId: '1',
    seller: 'CeA',
    measures: {
      cubicweight: 1,
      height: 10,
      length: 25,
      weight: 556,
      width: 10
    },
    unitMultiplier: 1,
    rewardValue: 0,
    values: [
      'Vermelho',
      'P'
    ]
  },
  {
    sku: 2523835,
    skuname: 'M',
    dimensions: {
      Cor: 'Vermelho',
      Tamanho: 'M'
    },
    available: false,
    availablequantity: 0,
    cacheVersionUsedToCallCheckout: null,
    listPriceFormated: 'R$ 0,00',
    listPrice: 0,
    taxFormated: 'R$ 0,00',
    taxAsInt: 0,
    bestPriceFormated: 'R$ 9.999.876,00',
    bestPrice: 999987600,
    spotPrice: 999987600,
    installments: 0,
    installmentsValue: 0,
    installmentsInsterestRate: null,
    image: 'https://cea.vteximg.com.br/arquivos/ids/9210632-450-540/Jaqueta-Feminina-Puffer-com-Capuz-Vermelha-9361803-Vermelho_1.jpg?v=636922459973830000',
    sellerId: '1',
    seller: 'CeA',
    measures: {
      cubicweight: 1,
      height: 10,
      length: 25,
      weight: 556,
      width: 10
    },
    unitMultiplier: 1,
    rewardValue: 0,
    values: [
      'Vermelho',
      'M'
    ]
  },
  {
    sku: 2523836,
    skuname: 'G',
    dimensions: {
      Cor: 'Vermelho',
      Tamanho: 'G'
    },
    available: false,
    availablequantity: 0,
    cacheVersionUsedToCallCheckout: null,
    listPriceFormated: 'R$ 0,00',
    listPrice: 0,
    taxFormated: 'R$ 0,00',
    taxAsInt: 0,
    bestPriceFormated: 'R$ 9.999.876,00',
    bestPrice: 999987600,
    spotPrice: 999987600,
    installments: 0,
    installmentsValue: 0,
    installmentsInsterestRate: null,
    image: 'https://cea.vteximg.com.br/arquivos/ids/9210632-450-540/Jaqueta-Feminina-Puffer-com-Capuz-Vermelha-9361803-Vermelho_1.jpg?v=636922459973830000',
    sellerId: '1',
    seller: 'CeA',
    measures: {
      cubicweight: 1,
      height: 10,
      length: 25,
      weight: 556,
      width: 10
    },
    unitMultiplier: 1,
    rewardValue: 0,
    values: [
      'Vermelho',
      'G'
    ]
  },
  {
    sku: 2523837,
    skuname: 'GG',
    dimensions: {
      Cor: 'Vermelho',
      Tamanho: 'GG'
    },
    available: false,
    availablequantity: 0,
    cacheVersionUsedToCallCheckout: null,
    listPriceFormated: 'R$ 0,00',
    listPrice: 0,
    taxFormated: 'R$ 0,00',
    taxAsInt: 0,
    bestPriceFormated: 'R$ 9.999.876,00',
    bestPrice: 999987600,
    spotPrice: 999987600,
    installments: 0,
    installmentsValue: 0,
    installmentsInsterestRate: null,
    image: 'https://cea.vteximg.com.br/arquivos/ids/9210632-450-540/Jaqueta-Feminina-Puffer-com-Capuz-Vermelha-9361803-Vermelho_1.jpg?v=636922459973830000',
    sellerId: '1',
    seller: 'CeA',
    measures: {
      cubicweight: 1,
      height: 10,
      length: 25,
      weight: 556,
      width: 10
    },
    unitMultiplier: 1,
    rewardValue: 0,
    values: [
      'Vermelho',
      'GG'
    ]
  }
]

export default (region) =>
  new Promise(async (resolve) => {
    const items = f.map(snapshot, dto => {
      return {
        id: dto.sku,
        quantity: 1,
        seller: '1'
      }
    }
    )

    const itemConditions = await getConditions(region, items)

    resolve(
      f.map(itemConditions, (dto) => new Sku(region, dto))
    )
  })
