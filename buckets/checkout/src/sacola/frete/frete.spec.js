import Frete from './frete'
// import Sacola from '@sacola'

// const sacola = new Sacola()

describe('Frete', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('Instancia da classe', function () {
    expect(Frete).toBeDefined()
  })

  // describe('Instancia dos metodos', function () {
  //   test('frete.limpar', function () {
  //     const frete = new Frete(sacola)
  //     const cep = jest.spyOn(frete, 'cep', 'get')
  //     frete.limpar()

  //     expect(frete.cep).toBe('')
  //     expect(cep).toHaveBeenCalled()
  //     expect(cep).toHaveBeenCalledTimes(1)
  //   })

  //   test('frete.validar', function () {
  //     const frete = new Frete(sacola)
  //     const cep = jest.spyOn(frete, 'cep', 'get')
  //     frete.validar('03922160')

  //     expect(frete.cep).toBe('03922160')
  //     expect(cep).toHaveBeenCalled()
  //     expect(cep).toHaveBeenCalledTimes(1)
  //   })
  // })
})
