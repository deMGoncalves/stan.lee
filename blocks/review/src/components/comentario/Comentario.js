import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

@paint(component)
class Comentario {
  #texto

  get texto () {
    return f.or(this.#texto, '(Cliente avaliou este produto mas não fez um comentário)') 
  }

  constructor (texto) {
    this.#texto = texto
  }

  [f.magic('__is__')] (Klass) {
    return this instanceof Klass
  }
}

export default Comentario
