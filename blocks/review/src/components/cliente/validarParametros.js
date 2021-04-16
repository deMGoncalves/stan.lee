import * as f from '@cea/f'
import Nome from '../nome'

export default function (nome) {
  if (f.not(f.is(Nome, nome))) {
    throw new Error('Para criar um Cliente é preciso passar um nome')
  }
}