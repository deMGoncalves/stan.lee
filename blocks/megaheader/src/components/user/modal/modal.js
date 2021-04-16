import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

import Back from './back'
import Logoff from './logoff'
import Logon from './logon'

import UserList from './user-list'

const oneOff = Symbol('oneOff')
const setLogin = Symbol('setLogin')

@paint(component)
class Modal {
  get back () {
    return this[oneOff].back
  }

  get className () {
    return this[oneOff].className
  }

  get login () {
    return this[oneOff].login
  }

  get loginOn () {
    return !!this[oneOff].loginOn
  }

  get status () {
    return this[oneOff].status
      ? 'opened'
      : 'closed'
  }

  get userList () {
    return this[oneOff].userList
  }

  constructor (user, service) {
    this[oneOff] = { user }
    this[oneOff].back = new Back(this)
    this[oneOff].login = this[setLogin](service)
    this[oneOff].userList = service.status ? UserList() : ' '
    this[oneOff].loginOn = service.status

    return this
  }

  @repaint
  close () {
    this[oneOff].status = f.F()
    return this
  }

  @repaint
  open () {
    this[oneOff].status = f.T()
    return this
  }

  @repaint
  [setLogin] (service) {
    return service.status ? new Logon(service) : new Logoff()
  }
}

export default Modal
