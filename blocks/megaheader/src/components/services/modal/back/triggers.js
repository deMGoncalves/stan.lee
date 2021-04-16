import * as f from '@f'
import radio from '@radio'

export default modal =>
  radio.on('body', (message) =>
    f.equal(message.event, 'click') && modal.close()
  )
