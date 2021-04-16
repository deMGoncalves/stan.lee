import { paint } from '@cea/h'
import component from './component'

const oneOff = Symbol('oneOff')

@paint(component)
class ServicesList {
  constructor (modal) {
    this[oneOff] = { modal }
    return this
  }
}

export default ServicesList
