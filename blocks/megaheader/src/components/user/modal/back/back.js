import { paint } from '@cea/h'
import component from './component'

const oneOff = Symbol('oneOff')

@paint(component)
class Back {
  constructor (modal) {
    this[oneOff] = { modal }
    return this
  }

  click () {
    this[oneOff].modal.close()
    return this
  }
}

export default Back
