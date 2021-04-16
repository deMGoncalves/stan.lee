import curry from '@cea/f/src/curry'
import debounce from '@cea/f/src/debounce'

function media (query) {
  const handlers = { inside () {}, outside () {} }
  const revelation = { in: inside, out: outside }

  const match = () =>
    handlers[matchMedia(query).matches ? 'inside' : 'outside'](undefined)

  function inside (handler) {
    handlers.inside = handler
    return revelation
  }

  function outside (handler) {
    handlers.outside = handler
    return revelation
  }

  window.addEventListener('resize', debounce(match))
  window.setTimeout(match, 0)

  return revelation
}

export default curry(media)
