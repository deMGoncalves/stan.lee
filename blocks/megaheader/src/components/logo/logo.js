import { paint } from '@cea/h'
import * as hook from '@cea/hook'
import component from './component.jsx'
import icon from './icon-logo.png'
import triggers from './triggers'

const oneOff = Symbol('oneOff')

@paint(component)
class Logo {
  get alt () {
    return 'C&A Loja Online - Moda, Roupas, Celulares e Calçados'
  }

  get className () {
    return this[oneOff].className
  }

  get src () {
    return icon
  }

  constructor (props) {
    this[oneOff] = { ...props }
    return this
  }

  @hook.after(triggers.click)
  redirect () {
    location.assign('https://www.cea.com.br')
    return this
  }
}

export default Logo
