import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import Service from './service'
import Modal from './modal'

const oneOff = Symbol('oneOff')
const userLoad = Symbol('userLoad')
const setLogin = Symbol('setLogin')

@paint(component)
class User {
  get className () {
    return this[oneOff].className
  }

  get fullName () {
    return this[oneOff].fullName
  }

  get login () {
    return this[oneOff].login
  }

  get modal () {
    return this[oneOff].modal
  }

  constructor (props) {
    this[userLoad]()
    this[oneOff] = { ...props }
    this[oneOff].fullName = 'minha conta e'
    this[oneOff].modal = ' '
    return this
  }

  open () {
    this[oneOff].modal.open()
    return this
  }

  async [userLoad] () {
    this[setLogin](await Service.user)
    return this
  }

  @repaint
  [setLogin] (user) {
    this[oneOff].modal = new Modal(this, { status: f.has('token', user), ...user })
    this[oneOff].fullName = f.has('token', user)
      ? `olá, ${user.firstName}`
      : 'minha conta e'

    return this
  }
}

export default User
