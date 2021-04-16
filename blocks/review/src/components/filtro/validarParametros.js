import * as f from '@cea/f'
import Produto from '../produto'

export default function (produto) {
  if (f.not(f.is(Produto, produto))) {
    throw new Error('Para criar um filtro é preciso passar um produto')
  }
}