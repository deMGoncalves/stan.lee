import { paint } from '@cea/h/'
import * as f from '@cea/f'
import component from './component'
import validarParametros from './validarParametros'

@paint(component)
class Recomendacao {
  #valor

  get valor () {
    return this.#valor
  }

  constructor (total, recomendado) {
    validarParametros(...arguments)
    this.#valor = this.calcularPorcentagem(total, recomendado)
  }

  calcularPorcentagem (total, recomendado) {
    const porcentagem = ((recomendado / total) * 100).toFixed(0)
    return porcentagem
  }

  [f.magic('__is__')] (Klass) {
    return this instanceof Klass
  }
}

export default Recomendacao
