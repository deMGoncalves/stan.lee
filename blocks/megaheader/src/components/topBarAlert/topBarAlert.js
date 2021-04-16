import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import hook from '@cea/hook'
import component from './component'
import triggers from './triggers'

const oneOff = Symbol('oneOff')

@paint(component)
@hook(triggers)
class TopBarAlert {
  get className () {
    return this[oneOff].className
  }

  get id () {
    return f.or(f.prop('idAlert', this[oneOff]), 'top_bar_alert')
  }

  get link () {
    return f.or(f.prop('linkAlert', this[oneOff]), '')
  }

  get status () {
    return f.equal('0', sessionStorage.getItem(this.id))
      ? 'closed'
      : 'opened'
  }

  get text () {
    return f.or(f.prop('textAlert', this[oneOff]), '')
  }

  constructor (props) {
    this[oneOff] = { ...props }
    return this
  }

  @repaint
  close () {
    sessionStorage.setItem(this.id, '0')
    return this
  }

  open () {
    sessionStorage.setItem(this.id, '1')
    return this
  }

  redirect () {
    location.assign(this.link)
    return this
  }
}

export default TopBarAlert
