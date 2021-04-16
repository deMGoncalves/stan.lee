import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import Subcategory from './subcategory'

@paint(component)
class Subcategories {
  #collection
  #breadcrumb
  #hide

  get breadcrumb () {
    return this.#breadcrumb
  }

  get collection () {
    return this.#collection
  }

  get hide () {
    return this.#hide ? 'hide' : ''
  }

  constructor (breadcrumb, collection) {
    this.#collection = collection
    this.#breadcrumb = breadcrumb
    this.#hide = false
  }

  @repaint
  back () {
    this.#hide = true
  }

  static create (snapshot) {
    return new Subcategories(
      [snapshot.department, f.prop('schema.name', snapshot)],
      f.map(f.prop('schema.subcategorias', snapshot), (dto) => new Subcategory(dto))
    )
  }
}

export default Subcategories
