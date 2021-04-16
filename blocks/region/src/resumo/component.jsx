import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

export default (resumo) =>
  <button className={style.resumo} onClick_prevent_stop={() => resumo.comprar()}>
    comprar agora
    <Hide if={f.isEmpty(resumo.entrega)}>
      <span className={style.resumo__span}>{resumo.entrega}</span>
    </Hide>
  </button>
