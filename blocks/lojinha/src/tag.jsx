import h, { render, repaint } from '@cea/h'
import * as f from '@cea/f'
import { FetchProductsIds, FetchProducts, FetchUser } from '@cea/serviceslojinha'
import Lojinha from './lojinha'
import './style.css'

const remove = Symbol('remove')
const append = Symbol('append')

customElements.define('cea-lojinha', class extends HTMLElement {
  #UTMs = window.location.search
  #engine = new URLSearchParams(this.#UTMs).get('utm_source') ?? 'mais';
  itensPorPagina = 36;
  produtos = [];

  #user = {}
  #prodIds = ''
  #pagina = 0
  #enableRefresh = false;
  #temMais = false;

  async connectedCallback () {
    this.#user = await FetchUser(this.#engine)
    this.#prodIds = await FetchProductsIds(this.#engine, this.#user.id)
    await this.obterProdutos()
    this[append]()

    if (this.#user.name === undefined) window.location.href = '//www.cea.com.br'

    return this
  }

  /**
   * Busca os produtos listados
   * @returns void
   */
  async obterProdutos () {
    const inicio = this.itensPorPagina * this.#pagina
    const fim = (this.itensPorPagina * (this.#pagina + 1)) - 1

    await FetchProducts(this.#prodIds ?? '', inicio, fim)
      .then(async resposta => {
        const res = await resposta.json()

        res.forEach(p => {
          // Sondar o pq de o items vir vazio dentro do push...
          const items = (p.items.length > 1) ? p.items : [p.items[0]]
          this.produtos.push({
            link: p.link + this.#UTMs,
            image: p.items.shift()?.images.shift().imageUrl,
            meta: p.metaTagDescription,
            name: p.productName,
            valor: this.#obterPreco(items)
          })
        })
      })

    this.#pagina++
  }

  #obterPreco = (i) => {
    return Math.max(...i.map(j => j.sellers.map(s => s.commertialOffer.Price).flat(Infinity)).flat(Infinity))
  }

  @repaint
  async [f.magic('renderizarProds')] () {
    await this.obterProdutos()
    this.#enableRefresh = false
    this[append]()

    return this
  }

  [append] () {
    this[remove]()
    render(this, <Lojinha user={this.#user} produtos={this.produtos} evt={() => {}/* () => this[f.magic('renderizarProds')]() */} carregaMais={(this.#temMais && this.#enableRefresh)} />)
    return this
  }

  [remove] () {
    this.innerHTML = ''
    return this
  }
})
