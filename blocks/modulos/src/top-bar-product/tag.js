import * as f from '@cea/f'
import h from '@cea/h'
import attributes from '@cea/modulos/src/attributes'
import Component from './component'
import fetchProductFlag from './fetchProductFlag'
import TopBarProduct from './TopBarProduct'

customElements.define('top-bar-product', class extends HTMLElement {
  connectedCallback () {
    window.addEventListener('DOMContentLoaded', async () => {
      const productSku = f.different(typeof skuJson,'undefined')
      const productFlags = productSku ? await fetchProductFlag(skuJson.productId) : {}
      this.appendChild(<Component props={new TopBarProduct(attributes(this), productFlags)} />)
    })
    return this
  }
})
