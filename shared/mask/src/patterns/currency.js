import * as f from '@cea/f'

export default (value) => {
  const centsValue = f.or(+value.toString().replace(/\D/g, ''), '')
  return new Intl.NumberFormat("pt-BR", { style: 'currency', currency: 'BRL' })
    .format(centsValue / 100)
    .replace('R$', '')
}