import h from '@cea/h'
import * as f from '@cea/f'
import Show from '../show'
import style from './style.css'

export default (props, children) =>
  <Show if={f.has(f.or(children, props.bannerTitle))}>
    <h2 className={[
      style.h2,
      style[f.or(props.color, props.colorTransform, 'black')],
      style[f.or(props.size, 'displaySmall')],
      props.className
    ]}>{ f.isEmpty(children) ? props.bannerTitle : children }</h2>
  </Show>
