import * as f from '@cea/f'
import radio from '@cea/radio'

export default (topBarAlert) =>
  radio.on('logo', (message) =>
    f.equal(message.event, 'click') && topBarAlert.open()
  )
