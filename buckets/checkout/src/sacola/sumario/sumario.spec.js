import Sumario from './sumario'
// import Sacola from '@sacola'
// import add from '@cea/f/src/add'
// import value from '@cea/f/src/value'
// import subtract from '@cea/f/src/subtract'

// jest.mock('@cea/f/src/add')
// jest.mock('@cea/f/src/value')
// jest.mock('@cea/f/src/subtract')

// const sacola = new Sacola()

describe('Sumario', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('Instancia da classe', function () {
    expect(Sumario).toBeDefined()
  })

  // describe('Instancia dos metodos', function () {
  //   test('sumario.desconto', function () {
  //     value.mockReturnValue(1.50)
  //     const sumario = new Sumario(sacola)
  //     const desconto = jest.spyOn(sumario, 'desconto', 'get')

  //     expect(sumario.desconto).toBe(1.50)
  //     expect(desconto).toHaveBeenCalled()
  //     expect(desconto).toHaveBeenCalledTimes(1)
  //     expect(value).toHaveBeenCalled()
  //     expect(value).toHaveBeenCalledTimes(1)
  //   })

  //   test('sumario.frete', function () {
  //     value.mockReturnValue(10.50)
  //     const sumario = new Sumario(sacola)
  //     const frete = jest.spyOn(sumario, 'frete', 'get')

  //     expect(sumario.frete).toBe(10.50)
  //     expect(frete).toHaveBeenCalled()
  //     expect(frete).toHaveBeenCalledTimes(1)
  //     expect(value).toHaveBeenCalled()
  //     expect(value).toHaveBeenCalledTimes(1)
  //   })

  //   test('sumario.parcela', function () {
  //     value.mockReturnValue(5)
  //     const sumario = new Sumario(sacola)
  //     const parcela = jest.spyOn(sumario, 'parcela', 'get')

  //     expect(sumario.parcela).toBe(5)
  //     expect(parcela).toHaveBeenCalled()
  //     expect(parcela).toHaveBeenCalledTimes(1)
  //     expect(value).toHaveBeenCalled()
  //     expect(value).toHaveBeenCalledTimes(1)
  //   })

  //   test('sumario.subTotal', function () {
  //     add.mockReturnValue(109.97)
  //     const sumario = new Sumario(sacola)
  //     const produtos = jest.spyOn(sacola, 'produtos', 'get')
  //     produtos.mockReturnValue([79.98, 29.99])

  //     expect(sumario.subTotal).toBe(109.97)
  //     expect(produtos).toHaveBeenCalled()
  //     expect(produtos).toHaveBeenCalledTimes(1)
  //     expect(add).toHaveBeenCalled()
  //     expect(add).toHaveBeenCalledTimes(1)
  //     // CAUTION: Os dois zeros garantem efeitos colaterais quando nao tiver produtos
  //     expect(add).toHaveBeenCalledWith(0, 0, 79.98, 29.99)
  //   })

  //   test('sumario.total', function () {
  //     subtract.mockReturnValue(118.97)
  //     const sumario = new Sumario(sacola)
  //     const total = jest.spyOn(sumario, 'total', 'get')

  //     expect(sumario.total).toBe(118.97)
  //     expect(total).toHaveBeenCalled()
  //     expect(total).toHaveBeenCalledTimes(1)
  //     expect(subtract).toHaveBeenCalled()
  //     expect(subtract).toHaveBeenCalledTimes(1)
  //   })
  // })
})
