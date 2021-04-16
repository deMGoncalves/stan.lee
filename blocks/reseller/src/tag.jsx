import h from '@cea/h'
import Reseller from './reseller'

customElements.define('pixel-reseller', class extends HTMLElement {
  connectedCallback () {
    this.append(<Reseller />)
    return this
  }
})
