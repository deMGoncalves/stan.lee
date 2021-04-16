import { paint, repaint } from '@cea/h/'
import component from './component'
import validarParametros from './validarParametros'

@paint(component)
class Filtro {
  #criterio
  #produto

  get criterio () {
    return this.#criterio
  }

  constructor (produto) {
    validarParametros(...arguments)
    this.#produto = produto
    this.#criterio = 'mais recentes'
  }

  @repaint
  por (novoCriterio) {
    const splitInfo = novoCriterio.split('|')
    this.#produto.filtrarPor(splitInfo[1])
    this.#criterio = splitInfo[0]
    return this
  }
}

export default Filtro
