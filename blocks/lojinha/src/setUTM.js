import * as f from '@cea/f'

const url = new URL(location.href)
const apolloUp = url.searchParams.get('apollo_up')
const utmSource = url.searchParams.get('utm_source')
const utmCampaign = url.searchParams.get('utm_campaign')

window.addEventListener('DOMContentLoaded', () => {
  if (apolloUp || /^apolloUp$/i.test(utmSource)) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ vtex_version: 1 })
    window.dataLayer.push({
      source: 'ApolloUp',
      campain: (utmCampaign || apolloUp),
      medium: 'minhacea',
      timestamp: new Date().getTime()
    })

    try {
      vtexjs
        .checkout
        .getOrderForm()
        .then((orderForm) =>
          vtexjs.checkout.sendAttachment(
            'marketingData',
            {
              ...orderForm.marketingData,
              utmSource: 'ApolloUp',
              utmCampaign: (utmCampaign || apolloUp)
            }
          )
        )
    } catch ({ name, message }) {
      console.log(`Minha C&A > setUTM > ${name}: ${message}`)
    }
  }
})
