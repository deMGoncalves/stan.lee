import * as f from '@cea/f'
import radio from '@cea/radio'
import { toggle } from './sla'

export default (sla) =>
  radio.addEventListener('message', (e) =>
    f.equal(
      f.equal('sla:toggle', e.data.action),
      f.different(sla.id, e.data.id)
    ) && sla[toggle](f.F())
  )