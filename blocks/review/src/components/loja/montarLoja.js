import buscaInformacoesGerais from '@/buscaInformacoesGerais'
import Nota from '../nota'
import Estrela from '../estrela'
import Quantidade from '../quantidade'

export default async (id, nome, foto, url) => {
  const informacoesGerais = await buscaInformacoesGerais(id, nome, foto, url)

  return [
    new Nota(parseFloat(informacoesGerais.store_rate.average)),
    new Estrela(new Nota(parseFloat(informacoesGerais.store_rate.average))),
    new Quantidade(informacoesGerais.store_rate.count)
  ]
}
