import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import Departments from './departments'
import { Login } from '@shared/'

const logon = f.magic('logon')
@paint(component)
class Mobile {
  #schema
  #account
  #copyLogin
  #departments
  #login
  #logonNavigation
  #status

  get copyLogin () {
    return this.#copyLogin
  }

  get departments () {
    return this.#departments
  }

  get login () {
    return this.#login
  }

  get logonNavigation () {
    return this.#logonNavigation ? 'open' : 'hide'
  }

  get status () {
    return this.#status ? 'open' : 'hide'
  }

  constructor (schema) {
    this.#schema = schema
    this.#departments = []
    this.#login = new Login()
    this.#status = f.F()
    this.#logonNavigation = f.F()
  }

  propagation (event) {
    console.log(event.dataset)
    event.dataset.close && this.close()
    event.dataset.logon && this[logon]()
  }

  @repaint
  back () {
    this.#logonNavigation = f.F()
    return this
  }

  @repaint
  close () {
    this.#status = f.F()
    this.#logonNavigation = f.F()
    return this
  }

  @repaint
  [logon] () {
    this.#copyLogin = this.#login
    this.#logonNavigation = f.T()
    return this
  }

  @repaint
  open () {
    this.#status = f.T()
    this.#departments = Departments.create(this.#schema)
    return this
  }
}

export default Mobile
