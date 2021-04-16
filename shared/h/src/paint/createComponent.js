import * as f from '@cea/f'
import * as d from '@cea/h/src/dunders'

export default (instance, component, children) =>
  f.assign(component(instance, children), { [d.__klass__]: instance })
