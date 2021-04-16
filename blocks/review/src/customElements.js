import * as f from '@cea/f'

/**
 * Cria um elemento customizado
 *
 * @name default
 * @function
 * @access public
 * @param {String} tagName Nome do tag html
 * @param {String} is Nome do tag name que pode extender o custom element
 * @returns {HTMLElement} Um elemento html
 */
export default (tagName, is) =>
  (klass) =>
    f.always(klass)(customElements.define(tagName, klass, { extends: is }))
