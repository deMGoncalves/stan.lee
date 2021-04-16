import h, { render } from '@cea/h'
import * as f from '@cea/f'
import radio from '@cea/radio'
import MegaHeader from './megaheader.jsx'
import webview from './webview'

const remove = Symbol('remove')
const append = Symbol('append')
const toggle = Symbol('toggle')

customElements.get('cea-megaheader') || customElements.define('cea-megaheader', class extends HTMLElement {
  static get observedAttributes () {
    return ['data-region-address', 'data-region-toggle', 'data-toggle']
  }

  get [toggle] () {
    return f.not(f.test(/off/, this.dataset.toggle))
  }

  attributeChangedCallback (key, _oldValue, value) {
    radio.emit(`mega-header:${key}`, value)

    f.test(/^data-toggle$/, key) && (
      this[toggle]
        ? this[append]()
        : this[remove]()
    )

    return this
  }

  connectedCallback () {
    webview(() => this[toggle] && this[append]())
    return this
  }

  [append] () {
    this[remove]()
    render(this, <MegaHeader megaHeader={this} {...this.dataset} />)
    return this
  }

  [remove] () {
    this.innerHTML = ''
    return this
  }
})
