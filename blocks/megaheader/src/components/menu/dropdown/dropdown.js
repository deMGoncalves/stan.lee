import h, { Fragment, paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import Category from './category'
import style from './style.css'

const oneOff = Symbol('oneOff')
const lazy = Symbol('lazy')
const mount = Symbol('mount')

@paint(component)
class Dropdown {
  get active () {
    return this[oneOff].active
  }

  get flag () {
    return this[oneOff].flag
  }

  get location () {
    return this[oneOff].location
  }

  get schema () {
    return this[oneOff].schema
  }

  constructor (schema) {
    this[oneOff] = { schema }
    this[oneOff].active = 0
    f.idle(() => this[lazy]())()
    return this
  }

  @repaint
  [lazy] () {
    this.mount = this[mount]
    return this
  }

  mount () {
    return <Fragment />
  }

  [mount] (departamento) {
    return (
      <article className={[style.dropdown__menu, style[`dropdown__${departamento.name}`]]}>
        <Category navigation={departamento} />
      </article>
    )
  }
}

export default Dropdown
