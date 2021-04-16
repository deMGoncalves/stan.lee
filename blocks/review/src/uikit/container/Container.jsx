import h from '@cea/h'
import style from './style.css'

const Container = (props, children) =>
  <div className={[style.container, props.className]}>
    { children }
  </div>

export default Container
