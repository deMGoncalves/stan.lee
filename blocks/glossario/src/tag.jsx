import h, { render } from '@cea/h'
import Glossario from './glossario'

customElements.define('cea-glossariomarcas', class extends HTMLElement {
  connectedCallback () {
    render(this, <Glossario />)
    return this
  }
})
