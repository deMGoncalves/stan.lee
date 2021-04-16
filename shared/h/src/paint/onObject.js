import * as f from '@cea/f'
import onComponent from './onComponent'

export default (klass, component) =>
  new Proxy(
    function (_, children) {
      return onComponent(klass, component, children)
    },
    {
      get: (_, key) => f.is(Function, klass[key]) ? klass[key].bind(klass) : klass[key],
      set: (_, key, value) => f.T(klass[key] = value)
    }
  )
