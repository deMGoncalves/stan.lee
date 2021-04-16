import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import Category from './category'
@paint(component)
class Categories {
  #breadcrumb
  #collection
  #hide
  #url

  get breadcrumb () {
    return this.#breadcrumb
  }

  get collection () {
    return this.#collection
  }

  get hide () {
    return this.#hide ? 'hide' : ''
  }

  get url () {
    return this.#url
  }

  constructor (department, collection) {
    this.#collection = collection
    this.#breadcrumb = [f.prop('name', department)]
    this.#hide = false
    this.#url = f.prop('url', department)
  }

  @repaint
  back () {
    this.#hide = f.T()
  }

  static create (snapshot) {
    return new Categories(
      { name: f.prop('name', snapshot), url: f.prop('url', snapshot) },
      f.map(f.prop('categorias', snapshot), (dto) =>
        new Category(f.prop('name', snapshot), dto))
    )
  }
}

export default Categories
