import curry from '@cea/f/src/curry'
import debounce from '@cea/f/src/debounce'
import magic from '@cea/f/src/magic'
import not from '@cea/f/src/not'
import offScreen from '@cea/f/src/offScreen'

const event = 'scroll'
const listener = magic('listener')

const lazyLoad = (node, handler) => (
  window.addEventListener(event, (node[listener] = debounce(() =>
    not(offScreen(node)) && (
      window.removeEventListener(event, node[listener]), handler())
  ))
  ),

  node[listener]()
)

export default curry(lazyLoad)
