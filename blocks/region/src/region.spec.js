import Region from './region'
import getCep from './localizacao/getCep'

jest.mock('./localizacao/getCep')

describe('Region', function () {
  test('region.skus | Retorna uma lista de skus', function () {
	getCep.mockReturnValue('04678-020')
    const region = new Region()
    expect(region.skus).toBeInstanceOf(Array)
  })
})
