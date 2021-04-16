import oneOff from './oneOff'
import { user } from './structs'

const apolloup = (payload) => user(
  payload.id_user,
  payload.name,
  `${oneOff.apolloup.host}/files/${payload.url}`,
  payload.description,
  `${oneOff.apolloup.host}/files/${payload.image}`
)

const mais = (payload) => user(
  payload.idreference,
  payload.name,
  payload.url,
  payload.description,
  payload.image
)

export default { apolloup, mais }
