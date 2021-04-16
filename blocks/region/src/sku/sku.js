import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import { alterarSku } from '@cea/region/src/resumo'
import EmCasa from '../entrega/emCasa'
import NaLoja from '../entrega/naLoja'

const oneOff = Symbol('oneOff')
const carregaSkuName = Symbol('carregaSkuName')
const carregarEntregas = Symbol('carregarEntregas')
const carregarExibicaoSlas = Symbol('carregarExibicaoSlas')
const skus = window.skuJson ? window.skuJson.skus : [
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

@paint(component)
class Sku {
  get id () {
    return f.or(parseInt(this[oneOff].dto.id), '')
  }

  get nome () {
    return f.or(this[oneOff].nome, '')
  }

  get slas () {
    return f.or(this[oneOff].dto.slas, [])
  }

  get disponibilidade () {
    return f.or(f.isEmpty(this[oneOff].dto.slas), 'item_unavailable')
  }

  constructor (region, dto) {
    this[oneOff] = { region, dto }
    this[carregaSkuName]()
    return this
  }

  [carregaSkuName](){
    f.filter(skus, (item) => {
      if(f.equal(this.id, f.prop('sku', item))) {
        this[oneOff].nome = f.prop('skuname', item)
      }
    })
    return this
  }

  [carregarExibicaoSlas](){
      const entregaCasa = f.filter(this.slas, (sla) => f.test(/^delivery$/i, f.prop('deliveryChannel', sla)))
      const entregaLoja = f.filter(this.slas, (sla) => f.test(/^(pickup-in-point|locker)$/i, f.prop('deliveryChannel', sla)))

      this[oneOff].region[carregarEntregas](new EmCasa(this[oneOff].region, entregaCasa), new NaLoja(this[oneOff].region, entregaLoja))
  }

  selecionar () {
    this[carregarExibicaoSlas]()
    this[oneOff].region.resumo[alterarSku](this.id)
    return this
  }
}

export default Sku
export {
  carregarEntregas
}
