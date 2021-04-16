import h from '@cea/h'
import style from './style.css'

export default ({ click }) =>
  <a className={style.hamburguer} onClick={() => click()}>Menu</a>
