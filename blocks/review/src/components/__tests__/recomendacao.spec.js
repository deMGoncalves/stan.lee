import Recomendacao from '../recomendacao'

describe('Recomendacao', () => {
  test('Deve retornar 79% quando acessar a propriedade valor', () => {
    const recomendacao = new Recomendacao(100, 79)
    expect(recomendacao.valor).toBe('79')
  })

  test('Deve retornar um erro quando criar uma recomendacao sem tatol', () => {
    const expression = () => (new Recomendacao())
    const error = new Error('Para criar uma Recomendacao é preciso passar um tatol')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando criar uma Recomendacao com o tatol diferente de um numero', () => {
    const expression = () => (new Recomendacao('40'))
    const error = new Error('Para criar uma recomendacao o tatol deve ser do tipo numero')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando o tatol da recomendacao for menor que zero', () => {
    const expression = () => (new Recomendacao(-1))
    const error = new Error('Para criar uma recomendacao o tatol deve ser maior que zero')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando criar uma recomendacao sem recomendado', () => {
    const expression = () => (new Recomendacao(10))
    const error = new Error('Para criar uma Recomendacao é preciso passar um recomendado')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando criar uma Recomendacao com o recomendado diferente de um numero', () => {
    const expression = () => (new Recomendacao(10, '40'))
    const error = new Error('Para criar uma recomendacao o recomendado deve ser do tipo numero')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando o recomendado da recomendacao for menor que zero', () => {
    const expression = () => (new Recomendacao(10, -1))
    const error = new Error('Para criar uma recomendacao o recomendado deve ser maior que zero')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando o recomendado da recomendacao for maior que o total de avaliacao', () => {
    const expression = () => (new Recomendacao(10, 12))
    const error = new Error('Para criar uma recomendacao o recomendado deve ser mmenor que o valor total')
    expect(expression).toThrowError(error)
  })
})
