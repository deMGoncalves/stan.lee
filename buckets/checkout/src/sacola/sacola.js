import Cupom, { validarCupom } from './cupom'
import Desconto from './desconto'
import Frete, { validarFrete } from './frete'
import Sumario from './sumario'

// import { OrderForm } from '@services'

import { paint } from '@cea/h'
import component from './component'

const oneOff = Symbol('oneOff')
const service = Symbol('service')
@paint(component)
class Sacola {
  get cupom () {
    return this[oneOff].cupom
  }

  get desconto () {
    return this[oneOff].desconto
  }

  get frete () {
    return this[oneOff].frete
  }

  get produtos () {
    return []
  }

  get sumario () {
    return this[oneOff].sumario
  }

  constructor () {
    // this[service]()
    this[oneOff] = {}
    this[oneOff].cupom = new Cupom(this)
    this[oneOff].frete = new Frete(this)
    this[oneOff].desconto = new Desconto()
    this[oneOff].sumario = new Sumario(this)
  }

  async [service] () {
    // const orderForm = await OrderForm.produtos
    // console.log(orderForm)
    return this
  }

  [validarCupom] (codigo) {
    //  Servicos Vtex
    return codigo
  }

  [validarFrete] (cep) {
    //  Servicos Vtex
    return cep
  }
}

export default Sacola
