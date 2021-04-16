import { paint } from '@cea/h'
import component from './component'

const oneOff = Symbol('oneOff')

@paint(component)
class Category {
  get navigation () {
    return this[oneOff].navigation
  }

  constructor (props) {
    this[oneOff] = { ...props }
  }
}

export default Category
