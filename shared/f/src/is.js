import curry from './curry'
import equal from './equal'
import F from './F'
import has from './has'
import isNil from './isNil'
import magic from './magic'
import or from './or'

const __is__ = magic('__is__')

/**
 * Compara se o valor é do mesmo tipo da classe
 *
 * @name is
 * @function
 * @access public
 * @param {*} klass Classe a ser comparado
 * @param {*} target Objeto a ser comparado
 * @return {Boolean} Retorna verdadeiro se tipo for igual
 */
const is = (Klass, target) => {
  if (isNil(target)) return F()
  if (has(__is__, target)) return target[__is__](Klass)

  return or(equal(target.constructor, Klass), target instanceof Klass)
}

export default curry(is)
