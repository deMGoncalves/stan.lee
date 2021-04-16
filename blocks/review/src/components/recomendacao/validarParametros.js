import * as f from '@cea/f'

export default function (total, recomendado) {
  if (f.isNil(total)) {
    throw new Error('Para criar uma Recomendacao é preciso passar um total')
  }

  if (f.not(f.is(Number, total))) {
    throw new Error('Para criar uma recomendacao o total deve ser do tipo numero')
  }

  if (f.lt(total, 1)) {
    throw new Error('Para criar uma recomendacao o total deve ser maior que zero')
  }

  if (f.isNil(recomendado)) {
    throw new Error('Para criar uma Recomendacao é preciso passar um recomendado')
  }

  if (f.not(f.is(Number, recomendado))) {
    throw new Error('Para criar uma recomendacao o recomendado deve ser do tipo numero')
  }

  if (f.lt(recomendado, 0)) {
    throw new Error('Para criar uma recomendacao o recomendado deve ser maior que zero')
  }

  if (f.lt(total, recomendado)) {
    throw new Error('Para criar uma recomendacao o recomendado deve ser menor que o valor total')
  }
}