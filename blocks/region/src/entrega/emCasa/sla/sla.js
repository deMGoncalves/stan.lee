import * as f from '@cea/f'
import { paint, repaint } from '@cea/h'
import hook, { before } from '@cea/hook'
import radio from '@cea/radio'
import { alterarEntrega } from '@cea/region/src/resumo'
import component from './component'
import format from './format'
import prazo from './prazo'
import trigger from './trigger'

const oneOff = Symbol('oneOff')
const toggle = Symbol('toggle')

@paint(component)
@hook(trigger)
class Sla {
  get id () {
    return this[oneOff].dto.id
  }

  get modalidade () {
    return f.prop('deliveryChannel', this[oneOff].dto)
  }

  get prazo () {
    return prazo(this[oneOff].dto.shippingEstimate)
  }

  get preco () {
    return format(this[oneOff].dto.price)
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
    this[oneOff].region.resumo[alterarEntrega](this.modalidade)
    return this
  }
}

export default Sla
export {
  toggle
}
