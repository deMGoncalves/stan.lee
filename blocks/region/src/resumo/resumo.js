import { paint, repaint } from '@cea/h'
import component from './component'
import addToCart from './addToCart'

const oneOff = Symbol('oneOff')
const alterarEntrega = Symbol('carregarEntrega')
const alterarLoja = Symbol('alterarLoja')
const alterarSku = Symbol('alterarSku')

@paint(component)
class Resumo {
  get entrega () {
    return {
      'delivery': 'recebe em casa',
      'drive-thru': 'retire na loja via drive-thru',
      'pickup-in-point': 'retire na loja'
    }[this[oneOff].entrega]
  }

  get loja () {
    return this[oneOff].loja
  }

  get sku () {
    return this[oneOff].sku
  }

  constructor () {
    this[oneOff] = {}
  }

  comprar () {
    addToCart(this)
    return this
  }

  @repaint
  [alterarEntrega] (novaEntrega) {
    this[oneOff].entrega = novaEntrega
    return this
  }

  [alterarLoja] (novaLoja) {
    this[oneOff].loja = novaLoja
    return this
  }

  [alterarSku] (novoSku) {
    this[oneOff].sku = novoSku
    return this
  }
}

export default Resumo
export {
  alterarEntrega,
  alterarLoja,
  alterarSku
}
