import { paint } from '@cea/h'
import * as f from '@cea/f'
import component from './component.jsx'

const oneOff = Symbol('oneOff')
const validarFrete = Symbol('validarFrete')

@paint(component)
class Frete {
  get cep () {
    return this[oneOff].cep
  }

  get status () {
    return this[oneOff].status
  }

  get [f.magic('f/value')] () {
    return 'A Calcular'
  }

  constructor (sacola) {
    this[oneOff] = { sacola }
    this[oneOff].status = ''
  }

  limpar () {
    this[oneOff].cep = ''
    return this
  }

  validar (cep) {
    this[oneOff].cep = cep
    this[oneOff].sacola[validarFrete](cep)

    return this
  }
}

export default Frete
export { validarFrete }
