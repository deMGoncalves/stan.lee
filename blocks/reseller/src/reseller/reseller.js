import { paint, repaint } from '@cea/h'
import { FetchUser, FindUser } from '@cea/serviceslojinha'
import { SetOrder } from '@cea/orderform'
import * as f from '@cea/f'
import component from './component'

const obterUsuario = Symbol('obterUsuario')
const usuarioOderForm = Symbol('usuarioOderForm')
const oneOff = Symbol('oneOff')
const render = Symbol('render')
const validar = Symbol('validar')

@paint(component)
class Reseller {
  get addButton () {
    return this[oneOff].addButton
  }

  get error () {
    return this[oneOff].error
  }

  get form () {
    return this[oneOff].form
  }

  get name () {
    return this[oneOff].name
  }

  get success () {
    return this[oneOff].success
  }

  constructor (props) {
    this[oneOff] = { ...props }
    this[oneOff].addButton = true
    this[usuarioOderForm]()
  }

  async [usuarioOderForm] () {
    let usuario = await FetchUser('mais')
    if (usuario.name === undefined) {
      usuario = await FetchUser('apollo')
      usuario.partner = 'apolloup'
    } else {
      usuario.partner = 'mais'
    }

    this[oneOff].addButton = false
    this[oneOff].success = false
    this[render](usuario)

    return this
  }

  async [obterUsuario] (id) {
    const response = await FindUser(id)

    if (response) {
      this[render](response)
      return this
    }

    this[validar]()
    return this
  }

  onSubmit () {
    if (f.not(f.isEmpty(this[oneOff].input))) {
      this[obterUsuario](this[oneOff].input)
    }
    return this
  }

  onChange (value) {
    this[oneOff].input = f.or(value.value, '')
    return this
  }

  @repaint
  openForm () {
    this[oneOff].form = true
    this[oneOff].addButton = false
    this[oneOff].success = false

    // service.setUtm('minhacea', 'minhacea')
    return this
  }

  @repaint
  [render] (user) {
    this[oneOff].error = false
    this[oneOff].form = false
    this[oneOff].success = true
    this[oneOff].name = f.or(user.name, '')
    SetOrder(f.or(user.user, ''), f.or(user.partner, 'mais'))
    return this
  }

  @repaint
  [validar] () {
    this[oneOff].error = true
    return this
  }
}

export default Reseller
