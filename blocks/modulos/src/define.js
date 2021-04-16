import h, { render } from '@cea/h'
import webview from './webview'
import attributes from './attributes'

export default (tagName, Component) =>
  customElements.define(tagName, class extends HTMLElement {
    get attributes () {
      return attributes(this)
    }

    connectedCallback () {
      this.setAttribute('data-order', '')
      this.attributes.webview
        ? this.__append()
        : webview(() => this.__append())
      return this
    }

    __append () {
      render(this, <Component self={this.attributes} />)
    }
  })
