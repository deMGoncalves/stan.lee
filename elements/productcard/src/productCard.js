import { paint } from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

import Component from './component'
import Flags from './flags'
import Picture from './picture'

@paint(Component)
class ProductCard {
  
  #clusterHighlights
  #hideFlags
  #installmentPrice
  #maxInstallment
  #price
  #title
  #url
  #urlImagesArray
  #stock

  get clusterHighlights () {
    return this.#clusterHighlights
  }

  get showFlags () {
    return f.and(f.notEmpty(this.#clusterHighlights), f.not(this.#hideFlags))
  }

  get installmentPrice () {
    return this.#installmentPrice
  }

  get maxInstallment () {
    return this.#maxInstallment
  }

  get price () {
    return this.#price
  }

  get hasStock () {
    return f.gt(this.#stock, 0)
  }

  get title () {
    return this.#title
  }

  get url () {
    return this.#url
  }

  get urlImagesArray () {
    return this.#urlImagesArray
  }

  constructor (props) {
    this.#clusterHighlights = f.prop('clusterHighlights', props)
    this.#hideFlags = f.prop('hideFlags', props)
    this.#installmentPrice = f.prop('installmentPrice', props)
    this.#maxInstallment = f.prop('maxInstallment', props)
    this.#price = f.prop('price', props)
    this.#stock = f.prop('stock', props)
    this.#title = f.prop('title', props)
    this.#url = f.prop('url', props)
    this.#urlImagesArray = f.prop('urlImagesArray', props)
  }

  renderProductImages () {
    const sliceTtwoImages = f.slice(this.urlImagesArray, 0, 2)
    const images = f.map(sliceTtwoImages, (image ,index) => {
      return new Picture( 
        {
          altImage: this.title,
          images:{...image}, 
          className: style[f.and(f.gt(sliceTtwoImages.length, 1), f.equal(index, 0)) ? 'productCard__imageHover' : 'default']
        } 
      )
    })
    return images 
  }

  renderProductFlags () {
    return new Flags(this)
  }


}
export default ProductCard
