import Data from '../data'

describe('Data', () => {
  test('Deve retornar "25/01/1988" quando acessar a propriedade valor', () => {
    const data = new Data('25/01/1988')
    expect(data.valor).toBe('25/01/1988')
  })

  test('Deve retornar um erro quando criar um data sem um valor no construtor', () => {
    const expression = () => (new Data())
    const error = new Error('Para criar uma Data é preciso passar uma data')
    expect(expression).toThrowError(error)
  })
})
