import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import service from './service'
@paint(component)
class Bag {
  #className
  #count

  get className () {
    return this.#className
  }

  get link () {
    return 'https://www.cea.com.br/checkout'
  }

  get count () {
    return this.#count.toString()
  }

  constructor (props) {
    this.#className = f.prop('className', props)
    this.#count = 0

    window.addEventListener('load', () => this[f.magic('service')]())

    // TODO: vtexjs implementa a emissao do orderform em jQuery (caso de estudo, aprender como funciona o .on() do Jquery)
    if ('vtexjs' in window) {
      // eslint-disable-next-line no-undef
      $(window).on('orderFormUpdated.vtex', (event, orderForm) =>
        this[f.magic('setCount')](f.or(f.prop('items.length', orderForm), 0))
      )
    }
  }

  async [f.magic('service')] () {
    this[f.magic('setCount')](await service.count())
    return this
  }

  @repaint
  [f.magic('setCount')] (count) {
    this.#count = count
    return this
  }
}

export default Bag
