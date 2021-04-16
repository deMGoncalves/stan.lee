import h, { Repeat } from '@cea/h'
import Imagelink from '@shared/imagelink'
import schema from './schema.json'

export default () =>
  <Repeat iterator={schema} component={Imagelink} />
