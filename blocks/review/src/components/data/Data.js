import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import validarParametros from './validarParametros'

@paint(component)
class Data {
  #valor
  #valorSEO

  get valor () {
    return this.#valor
  }

  get valorSEO () {
    return this.#valorSEO
  }

  constructor (valor) {
    validarParametros(...arguments)

    const dia = valor.split('/')[0]
    const mes = valor.split('/')[1]
    const ano = valor.split('/')[2]

    this.#valor = valor
    this.#valorSEO = `${ano}-${mes}-${dia} 00:00`
  }

  [f.magic('__is__')] (Klass) {
    return this instanceof Klass
  }
}

export default Data
