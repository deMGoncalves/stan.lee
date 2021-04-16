import h from '@cea/h'
import * as f from '@cea/f'
import attributes from '@cea/modulos/src/attributes'
import Component from './component'

customElements.define('top-alert', class extends HTMLElement {
  connectedCallback () {
    if (f.test(/^0$/, sessionStorage.getItem('top-alert'))) {
      this.style.display = 'block'
      return document.createComment('')
    }

    this.appendChild(<Component self={attributes(this)} onClosed={() => this.onClosed()} />)
    return this
  }

  onClosed () {
    sessionStorage.setItem('top-alert', '0')
    this.style.display = 'none'
    return this
  }
})
