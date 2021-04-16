import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import hook from '@cea/hook'
import triggers from './triggers'
import Back from './back'
import component from './component'

const oneOff = Symbol('oneOff')
@paint(component)
@hook(triggers)
class Modal {
  constructor (services) {
    this[oneOff] = { services }
    this[oneOff].back = new Back(this)
    return this
  }

  get back () {
    return this[oneOff].back
  }

  get className () {
    return this[oneOff].className
  }

  get status () {
    return this[oneOff].status
      ? 'opened'
      : 'closed'
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
}

export default Modal
