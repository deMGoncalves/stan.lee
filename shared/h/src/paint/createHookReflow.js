import * as f from '@cea/f'
import * as d from '@cea/h/src/dunders'
import reflow from '@cea/h/src/reflow'
import createComponent from './createComponent.js'

export default function (klass, component, children) {
  f.assign(klass, {
    [d.__element__]: createComponent(klass, component, children),
    [d.__reflow__]: f.idle(() => reflow(klass[d.__element__], component(klass, children)))
  })

  return klass[d.__element__]
}
