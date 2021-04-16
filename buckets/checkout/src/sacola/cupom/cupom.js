import { paint } from '@cea/h'
import component from './component.jsx'

const oneOff = Symbol('oneOff')
const validarCupom = Symbol('validarCupom')

@paint(component)
class Cupom {
  get codigo () {
    return this[oneOff].codigo
  }

  get status () {
    return this[oneOff].status
  }

  constructor (sacola) {
    this[oneOff] = { sacola }
    this[oneOff].status = ''
  }

  validar (codigo) {
    this[oneOff].codigo = codigo
    this[oneOff].sacola[validarCupom](codigo)
    return this
  }
}

export default Cupom
export { validarCupom }
