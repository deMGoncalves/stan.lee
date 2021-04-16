import h, { Repeat } from '@cea/h'
import ImageLink from '@shared/imagelink'
import schema from './schema.json'

export default () =>
  <Repeat iterator={schema} component={ImageLink} />
