import Quantidade from '../quantidade'

describe('Quantidade', () => {
  test('Deve retornar 22 quando acessar a propriedade valor', () => {
    const quantidade = new Quantidade(22)
    expect(quantidade.valor).toBe(22)
  })

  test('Deve retornar um erro quando criar uma quantidade sem valor', () => {
    const expression = () => (new Quantidade())
    const error = new Error('Para criar uma Quantidade é preciso passar um valor')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando criar uma Quantidade com o valor diferente de um numero', () => {
    const expression = () => (new Quantidade('40'))
    const error = new Error('Para criar uma Quantidade o valor deve ser do tipo numero')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando o valor da Quantidade for menor que zero', () => {
    const expression = () => (new Quantidade(-1))
    const error = new Error('Para criar uma Quantidade o valor deve ser maior que zero')
    expect(expression).toThrowError(error)
  })
})
