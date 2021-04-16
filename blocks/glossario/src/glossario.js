import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import fetchMarcas from './fetchMarcas'
import Indice from './indice'
import Marcas from './marcas'

const oneOff = f.magic('oneOff')
const alterarLetra = f.magic('alterarLetra')
const alterarMarcas = f.magic('alterarMarcas')
const carregarMarcas = f.magic('carregarMarcas')

@paint(component)
class Glossario {
  get indice () {
    return this[oneOff].indice
  }

  get letra () {
    return f.or(this[oneOff].letra, '')
  }

  get marcas () {
    return this[oneOff].marcas
  }

  constructor () {
    this[oneOff] = {}
    this[oneOff].indice = new Indice(this)
    this[oneOff].marcas = new Marcas([])
    this[carregarMarcas]()
    return this
  }

  [alterarLetra] (letra) {
    this[oneOff].letra = letra
    this[carregarMarcas]()
    return this
  }

  @repaint
  [alterarMarcas] (lista) {
    this[oneOff].marcas = new Marcas(lista)
    return this
  }

  async [carregarMarcas] () {
    this[alterarMarcas](await fetchMarcas(this.letra))
    return this
  }
}

export default Glossario
