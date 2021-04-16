import h from '@h'
import attributes from './attributes'
import customElements from './customElements'
import render from './render'

export default (tagName, Component) => {
  @customElements(tagName)
  class Modulo extends HTMLElement {
    @render
    connectedCallback () {
      this.setAttribute('data-order', '')
      return <Component self={attributes(this)} />
    }
  }

  return Modulo
}
