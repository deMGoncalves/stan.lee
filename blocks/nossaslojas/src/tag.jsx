import h from '@cea/h'
import Nossalojas from './nossaslojas'

customElements.define('cea-nossaslojas', class extends HTMLElement {
  connectedCallback () {
    this.append(<Nossalojas {...this.dataset} />)
    return this
  }
})
