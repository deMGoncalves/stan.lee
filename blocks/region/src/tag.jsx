import h, { render } from '@cea/h'
import Region from './region'

customElements.define('pixel-region', class extends HTMLElement {
  connectedCallback () {
    render(this, <Region />)
    return this
  }
})
