import h, { render } from '@cea/h'
import * as f from '@cea/f'
import Component from './component'
import webview from './webview'

const remove = Symbol('remove')
const append = Symbol('append')
const toggle = Symbol('toggle')

customElements.define('cea-megafooter', class extends HTMLElement {
  static get observedAttributes () {
    return ['data-toggle']
  }

  get [toggle] () {
    return f.not(f.test(/off/, this.dataset.toggle))
  }

  attributeChangedCallback () {
    this[toggle]
      ? this[append]()
      : this[remove]()
    return this
  }

  connectedCallback () {
    webview(() => this[toggle] && this[append]())
    return this
  }

  [append] () {
    f.idle(() => {
      this[remove]()
      render(this, <Component {...this.dataset} />)
    })()
    return this
  }

  [remove] () {
    this.innerHTML = ''
    return this
  }
})
