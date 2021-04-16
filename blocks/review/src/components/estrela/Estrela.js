import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import montarEstrelas from './montarEstrelas'
import validarParametros from './validarParametros'

@paint(component)
class Estrela {
  #nota

  get nota () {
    return this.#nota.valor
  }

  get valor () {
    return montarEstrelas(this.nota)
  }

  constructor (nota) {
    validarParametros(...arguments)
    this.#nota = nota
  }

  [f.magic('__is__')] (Klass) {
    return this instanceof Klass
  }
}

export default Estrela
