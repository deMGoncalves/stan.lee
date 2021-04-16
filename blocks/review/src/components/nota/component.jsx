import h from '@cea/h'
import style from './style.css'

export default (nota) =>
  <data value={nota.valor} className={style.nota}>{ nota.valor }</data>
