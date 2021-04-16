import Avaliacao from '../avaliacao'
import buscaInformacoesGerais from '@/buscaInformacoesGerais'
import Nota from '../nota'
import Recomendacao from '../recomendacao'
import Quantidade from '../quantidade'
import Estrela from '../estrela'

export default async (id, nome, foto, url, criterio) => {
  const avaliacoes = await Avaliacao.instance(id, criterio, 4)
  const informacoesGerais = await buscaInformacoesGerais(id, nome, foto, url)

  return [
    new Nota(informacoesGerais.rate.average),
    new Recomendacao(informacoesGerais.opinions_count.total, informacoesGerais.opinions_count.positive),
    new Quantidade(informacoesGerais.opinions_count.total),
    new Estrela(new Nota(informacoesGerais.rate.average)),
    id,
    avaliacoes
  ]
}
