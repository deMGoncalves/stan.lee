import h, { Fragment } from '@cea/h'
import style from './style.css'

export default (sku) =>
  <li className={[style.sku, style[sku.disponibilidade]]}>
    <button className={style.sku__button} onClick_prevent_stop={() => sku.selecionar()}>
      {sku.nome}
    </button>
  </li>
