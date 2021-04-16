import * as f from '@cea/f'

export default function (data) {
  if (f.isEmpty(data)) {
    throw new Error('Para criar uma Data é preciso passar uma data')
  }
}