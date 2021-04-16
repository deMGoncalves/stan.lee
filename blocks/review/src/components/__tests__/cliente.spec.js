import Cliente from '../cliente'
import Nome from '../nome'

describe('Cliente', () => {
  const nome = new Nome('Mohamad')
  const cliente = new Cliente(nome)

  test('Deve retornar um erro quando criar um cliente sem nome', () => {
    const expression = () => (new Cliente())
    const error = new Error('Para criar um Cliente é preciso passar um nome')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar "por Mohamad" quando acessar a propriedade nome', () => {
    expect(cliente.nome).toBe('Mohamad')
  })
})
