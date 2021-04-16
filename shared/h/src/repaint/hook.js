import * as f from '@cea/f'
import * as d from '@cea/h/src/dunders'

export default (mathod) =>
  function () {
    return f.always(mathod.call(this, ...arguments))(this[d.__reflow__] && this[d.__reflow__]())
  }
