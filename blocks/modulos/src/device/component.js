import h from '@cea/h'
import style from './style.css'

export default ({ self }, children) =>
  <div className={style[self.device]}>
    { children }
  </div>
