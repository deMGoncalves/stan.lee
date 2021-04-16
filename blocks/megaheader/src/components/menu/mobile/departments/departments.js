import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import Department from './department'

@paint(component)
class Departments {
  #collection

  get collection () {
    return this.#collection
  }

  constructor (collection) {
    this.#collection = collection
  }

  static create (snapshot) {
    return new Departments(f.map(snapshot, (dto) => new Department(dto)))
  }
}

export default Departments
