import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

@paint(component)
class Subcategory {
  #schema

  get name () {
    return f.prop('name', this.#schema)
  }

  get url () {
    return f.prop('url', this.#schema)
  }

  constructor (schema) {
    this.#schema = schema
  }

  open () {
    location.assign(f.prop('url', this.#schema))
  }
}

export default Subcategory
