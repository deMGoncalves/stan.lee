import * as f from '@cea/f'

import testIsInternalURL from './testIsInternalURL'

export default (url) => {
  const internalUrl = testIsInternalURL(url) && location.assign(url)
  const externalUrl = url && f.not(internalUrl) && open(url)

  return f.or(internalUrl, externalUrl)
}