import h, { render } from '@cea/h'

import Splitorder from './splitorder'
import fetchOrder from './fetchOrder'

customElements.define('cea-splitorder', class extends HTMLElement {
  async connectedCallback () {
    const orders = await fetchOrder()
    render(this, <Splitorder orders={orders} />)

    return this
  }
})
