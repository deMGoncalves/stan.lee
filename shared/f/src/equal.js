import curry from './curry'

/**
 * Compara se dois valores sao iguais, tanto tipo quanto valor
 *
 * @name equal
 * @function
 * @access public
 * @param {*} x Primeiro valor
 * @param {*} y Segundo valor
 * @return {Boolean} Verdadeio se os valores forem iguais
 */
const equal = (x, y) =>
  x === y

export default curry(equal)
