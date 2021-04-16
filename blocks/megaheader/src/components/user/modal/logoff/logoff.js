import { paint } from '@cea/h'
import component from './component'

const oneOff = Symbol('oneOff')

@paint(component)
class Logoff {
  constructor (modal) {
    this[oneOff] = { modal }
    return this
  }

  account () {}

  send () {}
}

export default Logoff
