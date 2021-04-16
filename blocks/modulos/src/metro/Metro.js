import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import style from './style.css'

const __element__ = f.magic('__element__')
const __columns__ = f.magic('__columns__')

@paint(component)
class Metro {
  get chegouNoFinal () {
    return this[__element__]
      ? f.lte(this.restoAhDireita(), 0)
      : f.F()
  }

  get estaNoComeco () {
    return this[__element__]
      ? f.lte(this.restoAhEsquerda(), 0)
      : f.T()
  }

  get estacao () {
    return this[__element__].querySelector(`.${style.metro__estacao}`)
  }

  get trilho () {
    return this[__element__].querySelector(`.${style.metro__trilho}`)
  }

  get vagao () {
    return this[__element__].querySelector(`.${style.metro__vagao}`)
  }

  get columns () {
    return this[__columns__]
  }

  constructor (attrs) {
    this[__columns__] = f.or(attrs.columns, '6')
    setTimeout(() => this.atualizarSetas(), 250)
    window.addEventListener('resize', () => this.resize(0))
    return this
  }

  @repaint
  atualizarSetas () {
    return this
  }

  n () {
    return parseInt(this.estacao.clientWidth / this.vagao.clientWidth)
  }

  comprimento () {
    return this.n() * this.vagao.clientWidth
  }

  margem () {
    return (window.getComputedStyle(this.vagao).marginRight.slice(0, -2) * 2) * this.n()
  }

  total () {
    return this.comprimento() + this.margem()
  }

  posicaoAtual () {
    return parseFloat(window.getComputedStyle(this.trilho).marginLeft.slice(0, -2))
  }

  mover (novaPosicao) {
    this.resize(this.posicaoAtual() + novaPosicao)
    return this
  }

  resize (valor) {
    this.trilho.style.marginLeft = `${valor}px`
    setTimeout(() => this.atualizarSetas(), 1250)
    return this
  }

  restoAhDireita () {
    return this.trilho.clientWidth - (Math.abs(this.posicaoAtual()) + this.estacao.clientWidth)
  }

  restoAhEsquerda () {
    return Math.abs(this.posicaoAtual())
  }

  goProx () {
    this.mover(-Math.min(this.total(), this.restoAhDireita()))
  }

  goPrev () {
    this.mover(Math.min(this.total(), this.restoAhEsquerda()))
  }
}

export default Metro
