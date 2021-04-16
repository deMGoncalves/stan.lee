import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import Sla from './sla'

const oneOff = Symbol('oneOff')

@paint(component)
class emCasa {
  get endereco () {
    return this[oneOff].region.localizacao
  }

  get slas () {
    return this[oneOff].slas
  }

  constructor (region, slas) {
    this[oneOff] = { region }
    this[oneOff].slas = f.map(slas, (dto) => new Sla(region, dto))
  }
}

export default emCasa
