import h, { paint, repaint } from '@cea/h'
import * as d from '@cea/h/src/dunders'
import * as f from '@cea/f'
import component from './component'

const render = f.magic('render')

@paint(component)
export default class {
  #offscreen
  #evt

  get offScreen () {
    return this.#offscreen
  }

  get evt () {
    return this.#evt
  }

  constructor (props) {
    this.#evt = props.evt
    this.#offscreen = f.T()

    setTimeout(() =>
      f.lazyLoad(this[d.__element__], () => this[render](this.#evt)))

    return this
  }

  @repaint
  [render] (evt) {
    this.#offscreen = f.F()
    evt()
    return this
  }
}
