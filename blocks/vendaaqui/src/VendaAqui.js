import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

const oneOff = Symbol('oneOff')
const status = Symbol('status')

@paint(component)
class VendaAqui {
  get status () {
    return this[status]
  }

  constructor () {
    this[status] = f.F()
    this[oneOff] = {}
    return this
  }

  @repaint
  criarConta () {
    this[status] = f.T()
    return this
  }
}

export default VendaAqui
