import * as f from '@cea/f'
import Estrela from '../estrela'
import Quantidade from '../quantidade'

export default function (estrela, quantidade) {
  if (f.not(f.is(Estrela, estrela))) {
    throw new Error('Para criar um PriorEvaluation é preciso passar uma estrela')
  }

  if (f.not(f.is(Quantidade, quantidade))) {
    throw new Error('Para criar um PriorEvaluation é preciso passar uma quantiade')
  }  
}