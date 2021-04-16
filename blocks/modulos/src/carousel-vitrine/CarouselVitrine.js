import h, { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import Component from './component.jsx'

import fetchProducts from './fetchProducts'
import getProductInfoToRender from './getProductInfoToRender'
import ProductCard from '@cea/productcard'
import Skeleton from './skeleton'

@paint(Component)
class CarouselVitrine {
  
  #button
  #hideFlag
  #productsList
  #productsToShow
  #renderedProductList
  #title
  #searchContext

  get button () {
    return f.and(f.notEmpty(this.#button), [f.prop('[0]', this.#button),  f.prop('[1]', this.#button)])
  }
  
  get colorTransform () {
    return 'black'
  }

  get hideFlag () {
    return f.equal(this.#hideFlag, 'true')
  }
  
  get moreLink () {
    return false
  }
  
  get productsList () {
    return this.#productsList
  }

  get productsToShow () {
    return this.#productsToShow
  }

  get renderedProductList () {
    return this.#renderedProductList
  }

  get searchContext () {
    return this.#searchContext
  }

  get title () {
    return this.#title
  }

  constructor (props) {
    this.#button = f.prop('button', props)
    this.#hideFlag = f.prop('hideFlag', props)
    this.#productsToShow = f.or(props.productsToShow, 12)
    this.#renderedProductList = this.renderSkeleton()
    this.#searchContext = f.prop('searchContext', props)
    this.#title = f.prop('title', props)
    this.fetchProducts()
  }

  async fetchProducts () {
    this.setProductsList(await fetchProducts(this.searchContext, this.productsToShow))
    return this
  }

  @repaint
  setProductsList (productList) {
    this.#productsList = productList
    this.#renderedProductList = this.renderProductList()
    return this
  }

  renderProductList () {
    return f.map(this.productsList, (product) =>
      new ProductCard({...getProductInfoToRender(product), hideFlags: this.hideFlag} )
    )
  }

  renderSkeleton () {
    return f.map([...Array(4)], () =>
      new Skeleton()
    )
  }
}
export default CarouselVitrine
