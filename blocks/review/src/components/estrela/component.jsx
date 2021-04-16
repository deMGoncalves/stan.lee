import h from '@cea/h'
import style from './style.css'

export default (estrela) =>
  <data value={estrela.nota} className={style.estrela}>{ estrela.valor }</data>
