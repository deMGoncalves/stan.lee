import * as f from '@cea/f'

import Cliente from '../cliente'
import Comentario from '../comentario'
import Data from '../data'
import Estrela from '../estrela'
import Nota from '../nota'

export default function (cliente, nota, estrela, comentario, data) {
  if (f.not(f.is(Cliente, cliente))) {
    throw new Error('Para criar uma Avaliação é preciso passar um cliente')
  }

  if (f.not(f.is(Comentario, comentario))) {
    throw new Error('Para criar uma Avaliação é preciso passar um comentario')
  }

  if (f.not(f.is(Data, data))) {
    throw new Error('Para criar uma Avaliação é preciso passar uma data')
  }

  if (f.not(f.is(Estrela, estrela))) {
    throw new Error('Para criar uma Avaliação é preciso passar uma estrela')
  }

  if (f.not(f.is(Nota, nota))) {
    throw new Error('Para criar uma Avaliação é preciso passar uma nota')
  }
}
