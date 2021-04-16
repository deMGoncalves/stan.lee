import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

import formatPrice from '@root/formatPrice'

@paint(component)
class Product {
  #order

  get catalog () {
    return f.map(f.prop('items', this.#order), (item) => ({
      imageUrl: item.imageUrl,
      name: item.name,
      quantity: item.quantity,
      price: formatPrice(item.price)
    }))
  }

  constructor (order) {
    this.#order = order
  }
}

export default Product
