import * as f from '@cea/f'
import mapper from './mapper'
import oneOff from './oneOff'
import { servicesUTM } from '@cea/orderform'

export default async function (engine) {
  const config = oneOff[engine]

  const { marketingData } = await servicesUTM.find()
  // Checamos primeiro a URL, para ter certeza que as UTM estão atualizadas...
  const user = new URLSearchParams(window.location.search).get('utm_campaign') ?? marketingData?.utmCampaign
  const url = `${config.host}/${config.partner}/${config.account_id}/${user}`

  return fetch(url, { headers: config.headers })
    .then(response => response.json())
    .then(users => f.or(users.shift(), {}))
    .then(payload => mapper[engine](payload))
    .catch(() => {})
}
