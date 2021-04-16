import h from '@cea/h'
import Component from './component'

customElements.define('look-mosaic', class extends HTMLElement {
  get looks () {
    return this
      .dataset
      .looks
      .split(';')
      .map(x => x.split('|'))
  }

  get description () {
    return this.dataset.description
  }

  get hashTag () {
    return this.dataset.hashTag
  }

  get title () {
    return this.dataset.title
  }

  connectedCallback () {
    this.innerHTML = ''
    this.appendChild(<Component self={this} />)
    return this
  }
})
