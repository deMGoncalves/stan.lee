import * as  f from '@cea/f'
import Nota from '../nota'

export default function (nota) {
  if (f.not(f.is(Nota, nota))) {
    throw new Error('Para criar uma estrela é preciso passar uma nota')
  }
}