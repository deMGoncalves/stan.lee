import * as f from '@cea/f'
import formatText from './formatText'
import joinStyles from './joinStyles'

class TopBarProduct {

  #collectionsOnModule
  #collectionsOnProduct
  #outProductPage
  #visibilityToggle
 
  get collectionsOnModule () {
    return this.#collectionsOnModule    
  }

  get collectionsOnProduct () {
    return this.#collectionsOnProduct   
  }

  get hideModule () {
    return f.or(f.equal(this.#visibilityToggle, 'hidden'), f.not(this.activeCollection()))   
  }
  
  get outProductPage () {
    return f.equal(this.#outProductPage, 'yes')   
  }

  get text () {
    return f.prop('[1]', this.activeCollection()) && formatText(f.prop('[1]', this.activeCollection()))
  }

  get textStyles () {
    return joinStyles(this.activeCollection())
  }

  get url () {
    return f.or(f.prop('[2]', this.activeCollection()), '#')
  }

  constructor (props, collectionsOnProduct) {
    this.#collectionsOnModule =  f.prop('collections', props)
    this.#collectionsOnProduct= collectionsOnProduct 
    this.#outProductPage = f.prop('outProductPage', props)
    this.#visibilityToggle = f.prop('toggle', props) 
  }

  activeCollection () {
    return this.outProductPage
      ? f.prop('[0]', this.collectionsOnModule)
      : f.find(this.collectionsOnModule, (flag) => f.has(f.prop('[0]', flag), this.collectionsOnProduct)) 
  }

  redirect () {
    return f.prop('[2]', this.activeCollection()) && location.assign(f.prop('[2]', this.activeCollection()))
  }

}

export default TopBarProduct