import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

@paint(component)
class Header {
  #order

  get address () {
    return f.prop('shippingData.address', this.#order)
  }

  get orderId () {
    return f.prop('orderId', this.#order)
  }

  get seller () {
    return f.or(f.prop('sellers', this.#order), [])
  }

  constructor (order) {
    this.#order = order
  }
}

export default Header
