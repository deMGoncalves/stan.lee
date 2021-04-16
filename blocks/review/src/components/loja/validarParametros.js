import * as f from '@cea/f'

import Nota from '../nota'
import Estrela from '../estrela'
import Quantidade from '../quantidade'

export default function (nota, estrela, quantidade) {
  if (f.not(f.is(Nota, nota))) {
    throw new Error('Para criar um Loja é preciso passar uma nota')
  }

  if (f.not(f.is(Estrela, estrela))) {
    throw new Error('Para criar um Loja é preciso passar uma estrela')
  }

  if (f.not(f.is(Quantidade, quantidade))) {
    throw new Error('Para criar um Loja é preciso passar uma quantiade')
  }
}