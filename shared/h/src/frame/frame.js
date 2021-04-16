import * as f from '@cea/f'

const frame = (target, ...args) =>
  window.requestAnimationFrame(() => target(...args))

export default f.curry(f.arity(2, frame))
