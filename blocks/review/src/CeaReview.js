import h, { render } from '@cea/h'
import * as f from '@cea/f'
import Component from './component'

import * as c from '@components'

customElements.define('cea-review', class extends HTMLElement {  
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
    const loja = await c.Loja.instance(this)
    const produto = await c.Produto.instance(this.idDoProduto, this.nome, this.foto, this.url, '')

    if (f.is(c.Produto, produto)) return this.montar(produto)
    if (f.is(c.Loja, loja)) return this.montar(loja)
  }

  montar (conteudo) {
    render(this, <Component>{ conteudo }</Component>)
  }
})
