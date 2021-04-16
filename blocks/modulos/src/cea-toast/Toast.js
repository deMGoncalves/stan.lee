import h from '@cea/h'
import * as f from '@cea/f'
import attributes from '@cea/modulos/src/attributes'
import webview from '@cea/modulos/src/webview'
import Component from './component'

customElements.define('cea-toast', class extends HTMLElement {
  connectedCallback () {
    if (f.test(/^0$/, localStorage.getItem('cea-toast'))) {
      return this
    }

    const self = attributes(this)

    if (self.webview) {
      this.appendChild(<Component self={self} onClose={() => this.onClose()} />)
      return this
    }

    webview(() => {
      this.appendChild(<Component self={self} onClose={() => this.onClose()} />)
    })

    return this
  }

  onClose () {
    localStorage.setItem('cea-toast', '0')
    this.remove()
    return this
  }
})
