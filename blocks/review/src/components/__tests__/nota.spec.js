import Nota from '../nota'

describe('Nota', () => {
  test('Deve retornar 3.5 quando acessar a propriedade valor', () => {
    const nota = new Nota(3.5)
    expect(nota.valor).toBe(3.5)
  })

  test('Deve retornar um erro quando criar uma nota sem valor', () => {
    const expression = () => (new Nota())
    const error = new Error('Para criar uma Nota é preciso passar um valor')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando criar uma Nota com o valor diferente de um numero', () => {
    const expression = () => (new Nota('40'))
    const error = new Error('Para criar uma nota o valor deve ser do tipo numero')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando o valor da nota for menor que zero', () => {
    const expression = () => (new Nota(-1))
    const error = new Error('Para criar uma nota o valor deve ser maior que zero')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando o valor da nota for maior que cinco', () => {
    const expression = () => (new Nota(5.1))
    const error = new Error('Para criar uma nota o valor deve ser menor que cinco')
    expect(expression).toThrowError(error)
  })
})
