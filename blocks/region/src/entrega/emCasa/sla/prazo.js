import * as f from '@cea/f'

export default (shipping) =>
  f.gt(parseFloat(shipping), 1)
    ? `Disponível em até ${parseFloat(shipping)} dias úteis`
    : 'Receba amanhã'