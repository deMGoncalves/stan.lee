import * as f from '@cea/f'

export default function (valor) {
  if (f.isNil(valor)) {
    throw new Error('Para criar uma Quantidade é preciso passar um valor')
  }

  if (f.not(f.is(Number, valor))) {
    throw new Error('Para criar uma Quantidade o valor deve ser do tipo numero')
  }

  if (f.lt(valor, 0)) {
    throw new Error('Para criar uma Quantidade o valor deve ser maior que zero')
  }
}