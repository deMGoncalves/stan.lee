import { paint } from '@cea/h'
import buscaInformacoesGerais from '@/buscaInformacoesGerais'
import component from './component'
import Estrela from '../estrela'
import Nota from '../nota'
import Quantidade from '../quantidade'
import validarParametros from './validarParametros'

@paint(component)
class MontarReviewPrior {
  #estrela
  #quantidade

  async static instance (idProduto) {
    const informacoesGerais = await buscaInformacoesGerais(idProduto)

    const componenteMontado = new MontarReviewPrior(
      new Estrela(new Nota(informacoesGerais.rate.average)),
      new Quantidade(informacoesGerais.opinions_count.total)
    )
    return componenteMontado
  }

  get estrela () {
    return this.#estrela
  }

  get quantidade () {
    return this.#quantidade.valor
  }

  constructor (estrela, quantidade) {
    validarParametros(...arguments)
    this.#estrela = estrela
    this.#quantidade = quantidade
  }
}

export default MontarReviewPrior
