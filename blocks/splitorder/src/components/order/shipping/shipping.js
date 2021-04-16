import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

import formatPrice from '@root/formatPrice'

@paint(component)
class Shipping {
  #order

  get freight () {
    return {
      type: f.prop('id', this[f.magic('logistic')]()),
      estimated: this[f.magic('estimated')](f.prop('shippingEstimate', this[f.magic('logistic')]())),
      price: f.equal(f.prop('price', this[f.magic('logistic')]()), 0)
        ? 'Grátis'
        : formatPrice(f.prop('price', this[f.magic('logistic')]()))
    }
  }

  constructor (order) {
    this.#order = order
  }

  [f.magic('estimated')] (estimate) {
    const time = estimate.replace(/\D/g, '')

    return f.equal(+time, 1) ? `${time} dia útil` : `${time} dias úteis`
  }

  [f.magic('logistic')] () {
    const selectedSlas = f.prop('shippingData.logisticsInfo[0].selectedSla', this.#order)
    const slas = f.prop('shippingData.logisticsInfo[0].slas', this.#order)

    return f.shift(f.filter(slas, (sla) => f.equal(f.prop('id', sla), selectedSlas)))
  }
}

export default Shipping
