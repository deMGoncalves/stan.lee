export default (money) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(+money / 100)
