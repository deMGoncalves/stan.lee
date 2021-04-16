import * as f from '@cea/f'

export default (listener) =>
  (e) =>
    listener(f.always(e)(e.preventDefault()))
