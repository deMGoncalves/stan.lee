import h from '@cea/h'
import style from './style.css'

const component = (props, children) =>
  <p
    className={[
      style.p,
      style[props.size],
      style[props.color],
      props.className
    ]}>
    { children }
  </p>

export default component
