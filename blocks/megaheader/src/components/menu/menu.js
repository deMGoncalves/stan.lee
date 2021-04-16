import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

import schema from './schema.json'
import Mobile from './mobile'
import Dropdown from './dropdown'

const oneOff = Symbol('oneOff')
const menu = Symbol('menu')
const changeNavigation = Symbol('changeNavigation')

@paint(component)
class Menu {
  get className () {
    return this[oneOff].className
  }

  get navigation () {
    return this[oneOff].navigation
  }

  constructor (props) {
    this[oneOff] = { ...props }
    this[menu]()

    return this
  }

  @repaint
  [changeNavigation] (Navigation) {
    this[oneOff].navigation = new Navigation(schema)
    return this
  }

  [menu] () {
    f.media('(min-width: 1024px)')
      .in(() => this[changeNavigation](Dropdown))
      .out(() => this[changeNavigation](Mobile))

    return this
  }
}

export default Menu
