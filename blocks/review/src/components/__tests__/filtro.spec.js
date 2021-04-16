import Filtro from '../filtro'
import Produto from '../produto'
import * as f from '@cea/f'

jest.mock('../produto/Produto.js')
jest.mock('../../../f/is.js')

describe('Filtro', () => {
  test('Deve retornar um erro se criar um filtro sem passar um produto', () => {
    const expression = () => (new Filtro())
    const error = new Error('Para criar um filtro é preciso passar um produto')
    expect(expression).toThrowError(error)
  })

  test('Deve chamar o metodo filtrarPor do objeto produto quando o filtro executar seu metodo por', () => {
    f.is.mockReset()
    f.is.mockReturnValue(true)

    Produto.mockReset()
    Produto.mockImplementation(() => ({
      filtrarPor (value) {
        expect(value).toBe('default')
      }
    }))

    const produto = new Produto()
    const filtro = new Filtro(produto)

    filtro.por('|default')
  })
})
