import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import Categories from './categories'

@paint(component)
class Department {
  #categories
  #schema

  get categories () {
    return this.#categories
  }

  get name () {
    return f.prop('name', this.#schema)
  }

  get url () {
    return f.prop('url', this.#schema)
  }

  constructor (schema) {
    this.#schema = schema
    this.#categories = []
  }

  @repaint
  open () {
    this.#categories = Categories.create(this.#schema)
  }
}

export default Department
