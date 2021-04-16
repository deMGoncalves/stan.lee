import h from '@cea/h'
import * as f from '@cea/f'
import H2 from '../h2'
import Show from '../show'
import style from './style.css'

export default (props) =>
  <Show if={f.has(props.title)}>
    <H2 className={[style.title, props.className]}>
      { props.title }
    </H2>
  </Show>
