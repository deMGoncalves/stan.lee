import h from '@cea/h'
import style from './style.css'

export default (naLoja) =>
  <div className={style.opcoesNaLoja}>
    <p><strong>retire na loja </strong>{naLoja.nome}</p>
    <ul>
      {naLoja.slas}
    </ul>
  </div>
