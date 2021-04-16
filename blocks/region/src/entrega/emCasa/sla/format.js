export default (price, fit = 0.1) =>
  new Intl
    .NumberFormat(['pt-BR'], { style: 'currency', currency: 'BRL' })
    .format(price * fit)