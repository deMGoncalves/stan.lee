import h from '@cea/h'
import * as s from '@cea/control'
import style from './style.css'

export default (props) =>
  <h4 className={[style.heading, props.className]}>
    <s.Show if={props.icon}>
      <span className={style.heading__icon}>Icone</span>
    </s.Show>

    {props.title}
  </h4>
