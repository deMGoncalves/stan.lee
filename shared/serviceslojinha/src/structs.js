import * as f from '@cea/f'

const url = new URL(location.href)
const _id = f.or(url.searchParams.get('utm_campaign'), url.hash.slice(1))

function oneOff (id = _id, host, partner, products) {
  return {
    account_id: id,
    host,
    user: _id,
    partner,
    products,
    headers: new Headers({ 'x-server-origin': 'minhacea.mais' })
  }
}

function user (id, name, banner, description, thumbnail) {
  return {
    id,
    name,
    banner,
    description,
    thumbnail
  }
}

export { oneOff, user }
