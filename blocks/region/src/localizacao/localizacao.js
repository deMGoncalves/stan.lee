import * as f from '@cea/f'
import getLocation from './getLocation'
import getAddress from './getAddress'

const oneOff = Symbol('oneOff')
const carregar = Symbol('carregar')
const carregarCep = Symbol('carregarCep')
const carregarEndereco = Symbol('carregarEndereco')
const alterarCep = Symbol('alteraCep')
const alterarEndereco = Symbol('alterarEndereco')
const carregarSkus = Symbol('carregarSkus')
const location = getLocation()

class Localizacao {
  get bairro () {
    return f.or(this[oneOff].endereco.neighborhood, '')
  }

  get cep () {
    return this[oneOff].cep
  }

  get cidade () {
    return f.or(this[oneOff].endereco.city, '')
  }

  get complemento () {
    return f.or(this[oneOff].endereco.complement, '')
  }

  get estado () {
    return f.or(this[oneOff].endereco.state, '')
  }

  get numero () {
    return f.or(this[oneOff].endereco.number, '')
  }

  get pais () {
    return f.or(this[oneOff].endereco.country, '')
  }

  get rua () {
    return f.or(this[oneOff].endereco.street, '')
  }

  constructor (region) {
    this[oneOff] = { region }
    this[carregar]()
    return this
  }

  async [carregar] () {
    await this[carregarCep]()
    await this[carregarEndereco]()
    this[oneOff].region[carregarSkus](this.cep)
    return this
  }

  [carregarCep] () {
    this[alterarCep](location.postalCode)
    return this
  }

  async [carregarEndereco] () {
    const endereco = await getAddress(location)
    this[alterarEndereco](endereco)
    return this
  }

  [alterarCep] (cep) {
    this[oneOff].cep = f.or(cep, '')
    return this
  }

  [alterarEndereco] (endereco) {
    this[oneOff].endereco = { ...endereco }
    return this
  }
}

export default Localizacao
export {
  carregarSkus
}
