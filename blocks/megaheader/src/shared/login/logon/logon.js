import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
@paint(component)
class Logon {
  #user

  get fullName () {
    return `${f.prop('user.firstName', this.#user)} ${f.prop('user.lastName', this.#user)}`
  }

  constructor (user) {
    this.#user = { user }
    return this
  }
}

export default Logon
