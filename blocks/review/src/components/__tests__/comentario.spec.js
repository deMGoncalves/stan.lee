import Comentario from '../comentario'

describe('Comentario', () => {
  test('Deve retornar "Gostei do produto" quando acessar a propriedade texto', () => {
    const comentario = new Comentario('Gostei do produto')
    expect(comentario.texto).toBe('Gostei do produto')
  })

  test('Deve retornar um erro quando criar um comentario sem um texto', () => {
    const comentario = new Comentario()
    expect(comentario.texto).toBe('(Cliente avaliou este produto mas não fez um comentário)')
  })

  test('Deve retornar um erro quando criar um comentario com um valor diferente do tipo Stirng', () => {
    const expression = () => (new Comentario([1, 2, 3]))
    const error = new Error('Para criar um Comentario precisa passar um texto do tipo String')
    expect(expression).toThrowError(error)
  })
})
