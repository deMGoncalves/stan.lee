import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

const oneOff = f.magic('oneOff')
const alterarLetra = f.magic('alterarLetra')

@paint(component)
class Indice {
  get letra () {
    return this[oneOff].glossario.letra
  }

  constructor (glossario) {
    this[oneOff] = { glossario }
    return this
  }

  @repaint
  selecionarLetra (letra) {
    this[oneOff].glossario[alterarLetra](letra)
    return this
  }
}

export default Indice
