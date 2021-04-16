import * as f from '@cea/f'

export const def = (index, style) =>
  f.equal(index, 0) ? style.active : ''

export const smallBanner = (categoria) =>
  f.or(f.has('marcas', categoria), f.has('tamanhos', categoria)) ? 'small' : ''

export const truncate = (text) =>
  text.length > 20 ? `${text.substring(0, 19)}...` : text

export function activeted (target, style) {
  const parent = target.parentNode
  parent.parentNode.querySelector(`.${style.active}`) &&
  parent.parentNode.querySelector(`.${style.active}`).classList.remove(style.active)
  parent.classList.add(style.active)
  return this
}
