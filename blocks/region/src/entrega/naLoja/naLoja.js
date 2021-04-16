import * as f from '@cea/f'
import { paint } from '@cea/h'
import component from './component'
import Sla from './sla'

const oneOff = Symbol('oneOff')

@paint(component)
class naLoja {
  get nome () {
    return this[oneOff].nome
  }

  get slas () {
    return this[oneOff].slas
  }

  constructor (region, slas) {
    this[oneOff] = { region }
    this[oneOff].nome = f.map(slas, (dto) => dto.pickupStoreInfo.friendlyName)
    this[oneOff].slas = f.map(slas, (dto) => new Sla(region, dto))
  }
}

export default naLoja
