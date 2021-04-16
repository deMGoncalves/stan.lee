import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

const oneOff = f.magic('oneOff')

@paint(component)
class Marcas {
  get lista () {
    return f.or(this[oneOff].lista, [])
  }

  constructor (lista) {
    this[oneOff] = { lista }
    return this
  }
}

export default Marcas
