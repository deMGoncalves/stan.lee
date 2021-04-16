import { paint } from '@cea/h'
import add from '@cea/f/src/add'
import subtract from '@cea/f/src/subtract'
import value from '@cea/f/src/value'
import component from './component.jsx'

const oneOff = Symbol('oneOff')
@paint(component)
class Sumario {
  get desconto () {
    return value(this[oneOff].sacola.desconto)
  }

  get frete () {
    return value(this[oneOff].sacola.frete)
  }

  get parcela () {
    return value(this[oneOff].sacola.parcela)
  }

  get subTotal () {
    return add(0, 0, ...this[oneOff].sacola.produtos)
  }

  get total () {
    return subtract(add(this.subTotal, this.frete), this.desconto)
  }

  constructor (sacola) {
    this[oneOff] = { sacola }
  }
}

export default Sumario
