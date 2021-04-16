import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

import Avaliacao from '../avaliacao'
import Filtro from '../filtro'
import montarProduto from './montarProduto'
import validarParametros from './validarParametros'

const alterarAvaliacoes = f.magic('alterarAvaliacoes')

@paint(component)
class Produto {
  #avaliacoes
  #criterio
  #estrela
  #filtro
  #idProduto
  #nota
  #quantidade
  #recomendacao
  #visivel

  async static instance (id, nome, foto, url, criterio) {
    return new Produto(...await montarProduto(id, nome, foto, url, criterio))
  }

  get avaliacoes () {
    return [...this.#avaliacoes]
  }

  get estrela () {
    return this.#estrela
  }

  get filtro () {
    return this.#filtro
  }

  get nota () {
    return this.#nota
  }

  get quantidade () {
    return this.#quantidade
  }
  
  get recomendacao () {
    return this.#recomendacao
  }

  get visivel () {
    return this.#visivel
  }

  constructor (nota, recomendacao, quantidade, estrela, idProduto, avaliacoes) {
    validarParametros(...arguments)

    this.#avaliacoes = f.slice(avaliacoes, 0, this.#visivel)
    this.#criterio = ''
    this.#estrela = estrela
    this.#filtro = new Filtro(this)
    this.#idProduto = idProduto
    this.#nota = nota
    this.#quantidade = quantidade
    this.#recomendacao = recomendacao
    this.#visivel = 4
  }

  loading () {
    this[alterarAvaliacoes](['Loading'])
    return this
  }

  async filtrarPor (criterio) {
    this.loading()
    this.#criterio = criterio
    this.#visivel = 4
    this[alterarAvaliacoes](await Avaliacao.instance(this.#idProduto, this.#criterio, this.#visivel))
    return this
  }

  async verMais (visivel) {
    this.loading()
    this.#visivel = visivel + 4
    this[alterarAvaliacoes](await Avaliacao.instance(this.#idProduto, this.#criterio, this.#visivel))
    return this
  }

  @repaint
  [alterarAvaliacoes] (novasAvaliacoes) {
    this.#avaliacoes = novasAvaliacoes
    return this
  }

  [f.magic('__is__')] (Klass) {
    return this instanceof Klass
  }
}

export default Produto
