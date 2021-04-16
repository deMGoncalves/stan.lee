import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import Subcategories from './subcategories'
@paint(component)
class Category {
  #subcategories
  #schema

  get className () {
    return this.cleanCategory() ? 'notcategory' : ''
  }

  get subcategories () {
    return this.#subcategories
  }

  get name () {
    return f.prop('schema.name', this.#schema)
  }

  get url () {
    return f.prop('schema.url', this.#schema)
  }

  constructor (department, schema) {
    this.#schema = { department, schema }
    this.#subcategories = []
  }

  cleanCategory () {
    return f.isEmpty(f.prop('schema.subcategorias', this.#schema))
  }

  @repaint
  open () {
    this.cleanCategory()
      ? location.assign(f.prop('schema.url', this.#schema))
      : this.#subcategories = Subcategories.create(this.#schema)
    return this
  }
}

export default Category
