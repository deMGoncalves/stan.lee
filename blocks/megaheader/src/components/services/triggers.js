import * as f from '@cea/f'
import radio from '@cea/radio'

export default (services) =>
  radio.on('body', (message) =>
    f.equal(message.event, 'click') && services.close()
  )
