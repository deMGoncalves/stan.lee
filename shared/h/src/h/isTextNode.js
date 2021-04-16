import * as f from '@cea/f'

export default (target) =>
  f.or(f.is(String, target), f.is(Number, target))
