import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import montarLoja from './montarLoja'
import validarParametros from './validarParametros'

@paint(component)
class Loja {
  #estrela
  #nota
  #quantidade

  async static instance (review) {
    return new Loja(...await montarLoja(review.idDoProduto, review.nome, review.foto, review.url))
  }

  get estrela () {
    return this.#estrela
  }

  get nota () {
    return this.#nota
  }

  get quantidade () {
    return this.#quantidade
  }

  constructor (nota, estrela, quantidade) {
    validarParametros(...arguments)

    this.#estrela = estrela
    this.#nota = nota    
    this.#quantidade = quantidade
  }

  [f.magic('__is__')] (Klass) {
    return this instanceof Klass
  }
}

export default Loja
