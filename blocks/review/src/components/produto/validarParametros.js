import * as f from '@cea/f'

import Estrela from '../estrela'
import Nota from '../nota'
import Quantidade from '../quantidade'
import Recomendacao from '../recomendacao'

export default function (nota, recomendacao, quantidade, estrela, idProduto, avaliacoes) {
  if (f.not(f.is(Nota, nota))) {
    throw new Error('Para criar um Produto é preciso passar uma nota')
  }

  if (f.not(f.is(Recomendacao, recomendacao))) {
    throw new Error('Para criar um Produto é preciso passar uma recomendação')
  }

  if (f.not(f.is(Quantidade, quantidade))) {
    throw new Error('Para criar um Produto é preciso passar uma quantidade')
  }

  if (f.not(f.is(Estrela, estrela))) {
    throw new Error('Para criar um Produto é preciso passar estrelas')
  }

  if (f.isNil(idProduto)) {
    throw new Error('Para criar um produto é preciso passar um id de produto')
  }

  if (f.not(f.is(Array, avaliacoes))) {
    throw new Error('Para criar um Produto é preciso passar avaliações')
  }
}