import h, { render } from '@cea/h'
import Component from './component'
import fecthProducts from './fetchProducts'

customElements.define('cea-comprelook', class extends HTMLElement {  
  connectedCallback () {  
    window.addEventListener('DOMContentLoaded', async () => {
      const productId = skuJson.productId
      const products = await fecthProducts(productId)    
      products && render(this, <Component products={products} productId={productId}/>)
    })      
    return this
  }  
})
