import * as f from '@cea/f'
import router from '@cea/router'

const url = new URL(location.href)
const hash = url.hash.slice(1)
const apolloUp = url.searchParams.get('apollo_up')

router(/^\/minhacea$/, () => {
  if (f.not(f.isEmpty(hash))) {
    location.assign(`https://${location.hostname}${location.pathname}?utm_source=mais&utm_medium=minhacea&utm_campaign=${hash}`)
  }
})

router(/^\/minhacea\/v-2$/, () => {
  if (f.not(f.isEmpty(hash))) {
    location.assign(`https://${location.hostname}${location.pathname}?utm_source=apolloup&utm_medium=minhacea&utm_campaign=${hash}`)
  }
})

if (f.not(f.isEmpty(apolloUp))) {
  location.assign(`https://${location.hostname}${location.pathname}?utm_source=apolloup&utm_medium=minhacea&utm_campaign=${apolloUp}`)
}
