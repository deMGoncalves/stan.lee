import { paint, repaint } from '@cea/h'
import component from './component'

@paint(component)
class BracketGrid {
  #produto
  #hoveredElement
  #opacity
  #gridData

  get produto () {
    return this.#produto
  }

  get hoveredElement () {
    return this.#hoveredElement
  }

  get opacity () {
    return this.#opacity
  }

  get gridData () {
    return this.#gridData
  }

  constructor (props) {
    this.#gridData = { ...props }
    this.#opacity = 'half-opacity'
    this.#hoveredElement = false
    this.#produto = {
      productTitle: props.self[`${props.tab}Bracket${props.n}Data`].split('|')[0],
      installments: props.self[`${props.tab}Bracket${props.n}Data`].split('|')[1],
      value: props.self[`${props.tab}Bracket${props.n}Data`].split('|')[2],
      imageUrl: props.self[`${props.tab}Bracket${props.n}Data`].split('|')[3]
    }
  }

  @repaint
  showPrices () {
    this.#hoveredElement = true
    this.#opacity = 'full-opacity'
  }

  @repaint
  hidePrices () {
    this.#hoveredElement = false
    this.#opacity = 'half-opacity'
  }
}

export default BracketGrid
