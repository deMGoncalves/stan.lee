import { paint, repaint } from '@cea/h'
import component from './component'
import Localizacao, { carregarSkus } from './localizacao'
import Resumo from './resumo'
import { carregarEntregas } from './sku'
import getSkus from './getSkus'

const oneOff = Symbol('oneOff')
const alterarSkus = Symbol('alterarSkus')
const alterarEntregas = Symbol('alterarEntregas')

@paint(component)
class Region {
  get skus () {
    return this[oneOff].skus
  }

  get emCasa () {
    return this[oneOff].emCasa
  }

  get naLoja () {
    return this[oneOff].naLoja
  }

  get resumo () {
    return this[oneOff].resumo
  }

  get localizacao () {
    return this[oneOff].localizacao
  }

  constructor () {
    this[oneOff] = {}
    this[oneOff].skus = []
    this[oneOff].emCasa = []
    this[oneOff].naLoja = []
    this[oneOff].resumo = new Resumo()
    this[oneOff].localizacao = new Localizacao(this)
  }

  async [carregarSkus] (cep) {
    const skus = await getSkus(this, cep)
    this[alterarSkus](skus)
    return this
  }

  async [carregarEntregas] (emCasa, naLoja) {
    this[alterarEntregas](emCasa, naLoja)
    return this
  }

  @repaint
  [alterarSkus] (skus) {
    this[oneOff].skus = skus
    return this
  }

  @repaint
  [alterarEntregas] (emCasa, naLoja) {
    this[oneOff].emCasa = emCasa
    this[oneOff].naLoja = naLoja
    return this
  }
}

export default Region
