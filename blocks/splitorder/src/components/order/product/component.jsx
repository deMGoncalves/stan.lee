import h, { Fragment, Repeat } from '@cea/h'
import template from './template'

export default (order) =>
  <>
    <Repeat iterator={order.catalog} component={template} />
  </>
