import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import schema from './schema.json'

@paint(component)
class Search {
  static ENGINE = f.or(f.prop('StanLee.search.engine', window), 'rr')

  #className

  get action () {
    return schema[Search.ENGINE].action
  }

  get className () {
    return this.#className
  }

  get label () {
    return 'busque por produto, categoria ou marca...'
  }

  get name () {
    return schema[Search.ENGINE].name
  }

  constructor (props) {
    this.#className = props.className
    return this
  }
}

export default Search
