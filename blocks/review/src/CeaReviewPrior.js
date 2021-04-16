import h, { render } from '@cea/h'
import * as f from '@cea/f'
import Component from './componentPrior'
import { MontarReviewPrior } from '@components'

customElements.define('cea-review-prior', class extends HTMLElement {  
  get idDoProduto () {
    return f.prop('productId', skuJson)
  }

  get nome () {
    return f.prop('name', skuJson)
  }

  get foto () {
    return f.prop('skus[0].image', skuJson)
  }

  get url () {
    return location.href
  }

  async connectedCallback () {
    this.montaComponent(await MontarReviewPrior.instance(this.idDoProduto, this.nome, this.foto, this.url))
    return this
  }

  montaComponent (previaAvaliacao) {
    render(this, <Component>{ previaAvaliacao }</Component>)
  }
})
