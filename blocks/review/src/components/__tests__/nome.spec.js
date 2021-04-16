import Nome from '../nome'

describe('Nome', () => {
  test('Deve retornar "por Mohamad" quando acessar a propriedade valor', () => {
    const nome = new Nome('Mohamad')
    expect(nome.valor).toBe('Mohamad')
  })

  test('Deve retornar um erro quando criar um nome sem um valor no construtor', () => {
    const expression = () => (new Nome())
    const error = new Error('Para criar um Nome precisa passar um valor')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando criar um nome com um valor diferente de String', () => {
    const expression = () => (new Nome([1, 2, 3]))
    const error = new Error('Para criar um Nome precisa passar um valor do tipo String')
    expect(expression).toThrowError(error)
  })
})
