import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import hook from '@cea/hook'
import component from './component'
import triggers, { changeRegionAddress, changeRegionToggle } from './triggers'

const oneOff = Symbol('oneOff')

@paint(component)
@hook(triggers)
class Region {
  get address () {
    return f.or(f.prop('address', this[oneOff]), '')
  }

  get className () {
    return this[oneOff].className
  }

  get toggle () {
    return f.test(/on/, this[oneOff].regionToggle)
  }

  constructor (props) {
    this[oneOff] = { ...props }
    return this
  }

  @repaint
  [changeRegionAddress] (value) {
    this[oneOff].address = value
    return this
  }

  @repaint
  [changeRegionToggle] (value) {
    this[oneOff].regionToggle = value
    return this
  }

  open () {
    this[oneOff].megaHeader.dispatchEvent(new Event('regionOpen'))
    return this
  }
}

export default Region
