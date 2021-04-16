export default function (/* product */ value) {
  // const value = Math.max(...product.items.map(i => i.sellers.map(s => s.commertialOffer.Price)).flat(Infinity))
  return value ? Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value) : 'esgotado'
}
