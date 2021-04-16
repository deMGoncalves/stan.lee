import h, { render } from '@cea/h'
import VendaAqui from './VendaAqui'

customElements.define('cea-vendaaqui', class extends HTMLElement {
  connectedCallback () {
    render(this, <VendaAqui />)
    return this
  }
})
