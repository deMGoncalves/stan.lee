import Desconto from './desconto'

describe('Desconto', function () {
  beforeEach(function () {
    jest.clearAllMocks()
  })

  test('Instancia da classe', function () {
    expect(Desconto).toBeDefined()
  })
})
