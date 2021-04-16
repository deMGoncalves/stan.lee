import h, { render } from '@cea/h'
import attributes from '@cea/modulos/src/attributes'
import Component from './component.jsx'
import FlagsHighlight from './FlagsHighlight'

customElements.define('flags-highlight', class extends HTMLElement {
  connectedCallback () {
    render(this, <Component props={new FlagsHighlight(attributes(this))} />)
    return this
  }
})
