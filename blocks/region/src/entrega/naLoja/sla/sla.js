import * as f from '@cea/f'
import { paint, repaint } from '@cea/h'
import component from './component'
import { alterarEntrega, alterarLoja } from '@cea/region/src/resumo'
import prazo from './prazo'
import hook, { before } from '@cea/hook'
import radio from '@cea/radio'
import trigger from './trigger'

const oneOff = Symbol('oneOff')
const toggle = Symbol('toggle')

@paint(component)
@hook(trigger)
class Sla {
  get id () {
    return this[oneOff].dto.pickupStoreInfo.address.addressId
  }

  get modalidade () {
    return f.prop('deliveryChannel', this[oneOff].dto)
  }

  get prazo () {
    return prazo(this[oneOff].dto.shippingEstimate)
  }

  get checked () {
    return !!this[oneOff].checked
  }

  constructor (region, dto) {
    this[oneOff] = { region, dto }
    return this
  }

  @repaint
  [toggle] (value) {
    this[oneOff].checked = value
    return this
  }

  @before((id) => radio.postMessage({ action: 'sla:toggle', id }))
  selecionar () {
    this[toggle](f.T())
    this[oneOff].region.resumo
      [alterarEntrega](this.modalidade)
      [alterarLoja](this.id)
    return this
  }
}

export default Sla
export {
  toggle
}