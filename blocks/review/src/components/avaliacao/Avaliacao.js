import { paint } from '@cea/h/'
import * as f from '@cea/f'
import component from './component'
import buscarAvaliacoes from './buscarAvaliacoes'
import Cliente from '../cliente'
import Comentario from '../comentario'
import Data from '../data'
import Estrela from '../estrela'
import Nome from '../nome'
import Nota from '../nota'
import validarParametros from './validarParametros'

@paint(component)
class Avaliacao {
  #cliente
  #comentario
  #data
  #estrela
  #nota

  async static instance (idProduto, criterio, visivel) {
    const snapshot = await buscarAvaliacoes(idProduto, criterio, visivel)
    var avaliacoes = []

    f.forEach(snapshot.items, (avaliacao) => {
      try {
        f.push(avaliacoes, new Avaliacao(
          new Cliente(new Nome(avaliacao.user.name)),
          new Nota(avaliacao.rate),
          new Estrela(new Nota(avaliacao.rate)),
          new Comentario(avaliacao.opinion),
          new Data(avaliacao.created_at)
        ))
      } catch (error) {
        console.warn(error)
      }
    })

    return avaliacoes
  }

  get cliente () {
    return this.#cliente.nome
  }

  get comentario () {
    return this.#comentario.texto
  }

  get data () {
    return this.#data
  }

  get estrela () {
    return this.#estrela
  }

  get nota () {
    return this.#nota
  }

  get [f.__equal__] () {
    return f.gte(this.nota, 3) ? 'positiva' : 'negativa'
  }

  constructor (cliente, nota, estrela, comentario, data) {
    validarParametros(...arguments)

    this.#cliente = cliente
    this.#comentario = comentario
    this.#data = data
    this.#estrela = estrela
    this.#nota = nota
  }
}

export default Avaliacao
