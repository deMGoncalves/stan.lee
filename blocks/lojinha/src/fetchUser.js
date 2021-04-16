import * as f from '@cea/f'
import oneOff from './oneOff'

function apolloup (payload) {
  return {
    id: payload.id_user,
    name: payload.name,
    banner: `${oneOff.apolloup.host}/files/${payload.url}`,
    description: payload.description,
    thumbnail: `${oneOff.apolloup.host}/files/${payload.image}`
  }
}

function mais (payload) {
  return {
    id: payload.idreference,
    name: payload.name,
    banner: payload.url,
    description: payload.description,
    thumbnail: payload.image
  }
}

const mapper = { apolloup, mais }

export default function (engine) {
  const config = oneOff[engine]
  const url = `${config.host}/${config.partner}/${config.account_id}/${config.user}`

  return fetch(url, { headers: config.headers })
    .then(response => response.json())
    .then(users => f.or(users.shift(), {}))
    .then(payload => mapper[engine](payload))
    .catch(() => {})
}
