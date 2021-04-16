import curry from '@cea/f/src/curry'
import gt from '@cea/f/src/gt'
import subtract from '@cea/f/src/subtract'

const offScreen = (node) =>
  gt(subtract(node.getBoundingClientRect().top, window.innerHeight), window.innerHeight)

export default curry(offScreen)
