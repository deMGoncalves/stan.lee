import Cupom from './cupom'
// import Sacola from '@sacola'

// const sacola = new Sacola()

describe('Cupom', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('Instancia da classe', function () {
    expect(Cupom).toBeDefined()
  })

  // describe('Instancia dos metodos', function () {
  //   test('frete.validar', function () {
  //     const cupom = new Cupom(sacola)
  //     const codigo = jest.spyOn(cupom, 'codigo', 'get')
  //     cupom.validar('XPTO_10xp')

  //     expect(cupom.codigo).toBe('XPTO_10xp')
  //     expect(codigo).toHaveBeenCalled()
  //     expect(codigo).toHaveBeenCalledTimes(1)
  //   })
  // })
})
