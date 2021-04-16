import * as f from '@cea/f'

export default function (valor) {
  if (f.isEmpty(valor)) {
    throw new Error('Para criar um Nome precisa passar um valor')
  }

  if (f.not(f.is(String, valor))) {
    throw new Error('Para criar um Nome precisa passar um valor do tipo String')
  }
}