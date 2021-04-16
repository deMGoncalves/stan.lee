/**
 * Este hook faz o render o corpo do modulo
 *
 * @name default
 * @function
 * @access public
 * @args {HTMLElement} klass A classe do HTMLElement do modulo
 * @args {String} _ Nome do metodo que sera substituido
 * @args {Object} descriptor Objeto descritor do metodo a ser substituido
 * @returns {Object} O descriptor do metodo
 */
export default (klass, _, descriptor) => {
  const originalMethod = descriptor.value

  Object.assign(descriptor, {
    value (...args) {
      this.innerHTML = ''
      this.appendChild(originalMethod.call(this, ...args))
      return this
    }
  })
}
