const url = new URL(location.href)
const utmCampaign = url.searchParams.get('utm_campaign')
const hash = url.hash.slice(1)
const headers = new Headers()
headers.append('x-server-origin', 'minhacea.mais')

export default {
  apolloup: {
    account_id: '08522b4b',
    host: 'https://www.apolloup.com.br/alto',
    user: utmCampaign || hash,
    partner: 'promotores',
    products: 'product',
    headers
  },
  mais: {
    account_id: utmCampaign || hash,
    host: 'https://apicea.mais.com.br/api/MinhaCea',
    user: utmCampaign || hash,
    partner: 'FindDataByDomain',
    products: 'FindProductsStoreByDomain',
    headers
  }
}
