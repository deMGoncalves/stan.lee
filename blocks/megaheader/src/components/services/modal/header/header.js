import { paint } from '@cea/h'
import component from './component'

const oneOff = Symbol('oneOff')

@paint(component)
class Logon {
  get fullName () {
    return `${this[oneOff].modal.firstName} ${this[oneOff].modal.lastName}`
  }

  constructor (modal) {
    this[oneOff] = { modal }
    return this
  }
}

export default Logon
