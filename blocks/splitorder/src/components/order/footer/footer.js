import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

@paint(component)
class Footer {
  #order

  get payment () {
    return f.or(f.prop('paymentData.transactions[0].payments[0]', this.#order), [])
  }

  get sumario () {
    return f.or(f.prop('totals', this.#order), [])
  }

  get total () {
    return f.prop('value', this.#order)
  }

  constructor (order) {
    this.#order = order
  }
}

export default Footer
