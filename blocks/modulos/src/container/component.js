import h from '@cea/h'
import style from './style.css'

export default (_, children) =>
  <div className={style.container}>
    { children }
  </div>
