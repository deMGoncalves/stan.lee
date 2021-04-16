import * as f from '@cea/f'

export default f.map(f.__, (text) =>
  [...new DOMParser().parseFromString(text, 'text/html').body.childNodes])
