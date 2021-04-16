import h from '@cea/h'
import style from './style.css'

export default (emCasa) =>
  <div className={style.opcoesEmCasa}>
    <p><strong>entrega em </strong>{emCasa.endereco.rua}</p>
    <ul>
      {emCasa.slas}
    </ul>
  </div>
