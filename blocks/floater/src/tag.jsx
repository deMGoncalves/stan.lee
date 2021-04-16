import h, { render } from '@cea/h'
import Floater from './Floater'

customElements.define('cea-floater', class extends HTMLElement {  
  connectedCallback () {  
    render(this, <Floater {...this.dataset}/>)    
    return this
  }  
})
