import * as f from '@cea/f'
const oneOff = Symbol('oneOff')
class Desconto {
  get [f.magic('f/value')] () {
    return 'R$ 0,00'
  }

  constructor () {
    this[oneOff] = {}
  }
}

export default Desconto
