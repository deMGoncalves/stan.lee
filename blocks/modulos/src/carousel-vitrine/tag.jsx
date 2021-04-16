import h, { render } from '@cea/h'
import attributes from '@cea/modulos/src/attributes'
import CarouselVitrine from './CarouselVitrine'
customElements.define('carousel-vitrine', class extends HTMLElement {
  connectedCallback () {
    render(this, <CarouselVitrine {...attributes(this)} />)
    return this
  }
})
