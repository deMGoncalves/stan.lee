import * as f from '@cea/f'
import worker from './worker'

const emit = (channel, message) =>
  worker.postMessage({ channel, message })

export default f.curry(emit)
