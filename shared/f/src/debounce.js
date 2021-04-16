import arity from '@cea/f/src/arity'
import curry from '@cea/f/src/curry'

const debounce = (handler, wait = 250, timeoutID) =>
  (...args) => {
    timeoutID = window.clearTimeout(timeoutID)
    timeoutID = window.setTimeout(() => handler(...args), wait)
  }

export default curry(arity(1, debounce))
