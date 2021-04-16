import h from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

const component = (props, children) =>
  <h3
    className={[
      style.h3,
      style[f.or(props.size, 'displaySmall')],
      style[f.or(props.color, 'black')],
      props.className
    ]}>
    { children }
  </h3>

export default component
