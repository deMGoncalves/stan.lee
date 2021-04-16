import Sacola from './sacola'
import Cupom from './cupom'
import Desconto from './desconto'
import Frete from './frete'
import Sumario from './sumario'

jest.mock('./desconto')
jest.mock('./frete')
jest.mock('./cupom')
jest.mock('./sumario')

describe('Sacola', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('Instancia da classe', function () {
    expect(Sacola).toBeDefined()
  })

  test('sacola.produtos | Retorna uma lista de produtos', function () {
    const sacola = new Sacola()
    expect(sacola.produtos).toBeInstanceOf(Array)
  })

  describe('Instancia dos metodos', function () {
    test('sacola.cupom', function () {
      Cupom.mockReturnValue({})
      const sacola = new Sacola()

      expect(sacola.cupom).toEqual({})
      expect(Cupom).toHaveBeenCalled()
      expect(Cupom).toHaveBeenCalledTimes(1)
    })

    test('sacola.desconto', function () {
      Desconto.mockReturnValue({})
      const sacola = new Sacola()

      expect(sacola.desconto).toEqual({})
      expect(Desconto).toHaveBeenCalled()
      expect(Desconto).toHaveBeenCalledTimes(1)
    })

    test('sacola.frete', function () {
      Frete.mockReturnValue({})
      const sacola = new Sacola()

      expect(sacola.frete).toEqual({})
      expect(Frete).toHaveBeenCalled()
      expect(Frete).toHaveBeenCalledTimes(1)
    })

    test('sacola.sumario', function () {
      Sumario.mockReturnValue({})
      const sacola = new Sacola()

      expect(sacola.sumario).toEqual({})
      expect(Sumario).toHaveBeenCalled()
      expect(Sumario).toHaveBeenCalledTimes(1)
      // expect(Sumario).toHaveBeenCalledWith(sacola)
    })
  })
})
