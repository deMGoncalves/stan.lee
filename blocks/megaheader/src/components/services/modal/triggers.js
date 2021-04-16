import * as f from '@cea/f'
import radio from '@cea/radio'

export default modal => {
  radio.on('body', (message) =>
    f.equal(message.event, 'click') && modal.close()
  )

  radio.on('services', (message) =>
    f.equal(message.event, 'open') && modal.open()
  )
}
