import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
@paint(component)
class Order {
  #payload

  get sellers () {
    return this[f.magic('order')](this[f.magic('seller')]())
  }

  constructor (payload) {
    this.#payload = payload
  }

  [f.magic('seller')] () {
    return f.map(f.or(f.prop('sellers', this.#payload), []), (seller) => ({
      order: +(f.or(seller.orderId, '').split('-')[1]),
      ...seller
    }))
  }

  [f.magic('order')] (el) {
    return el.sort((a, b) => a.order - b.order)
  }

  get [f.magic('f/map')] () {
    return this.sellers
  }
}

export default Order
