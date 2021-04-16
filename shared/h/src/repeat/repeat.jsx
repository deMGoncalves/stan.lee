import h from '@cea/h/src/h'
import * as f from '@cea/f'
import Fragment from '@cea/h/src/fragment'

export default (props) =>
  <Fragment slot={props.slot}>
    {f.map(props.iterator, (attrs, index) => props.component(attrs, index))}
  </Fragment>
