import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import validarParametros from './validarParametros'

@paint(component)
class Nome {
  #valor

  get valor () {
    return this.#valor
  }

  constructor (valor) {
    validarParametros(...arguments)
    this.#valor = valor
  }

  [f.magic('__is__')] (Klass) {
    return this instanceof Klass
  }
}

export default Nome
