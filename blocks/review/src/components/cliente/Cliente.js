import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import validarParametros from './validarParametros'

@paint(component)
class Cliente {
  #nome

  get nome () {
    return this.#nome
  }

  constructor (nome) {
    validarParametros(...arguments)

    this.#nome = nome
  }

  [f.magic('__is__')] (Klass) {
    return this instanceof Klass
  }
}

export default Cliente
