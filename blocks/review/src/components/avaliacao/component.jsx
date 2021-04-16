import h from '@cea/h'
import { P } from '@cea/review/src/uikit'
import style from './style.css'

export default (avaliacao) =>
  <div className={style.avaliacao}>
    <div className={style.infoNota}>
      <div className={style.nota}>{ avaliacao.nota }</div>
      <div className={style.estrela}>{ avaliacao.estrela }</div>
    </div>
    <div className={style.infoCliente}>
      { avaliacao.comentario }
      <P className={style.nomeData} size='xSmall' color='blackLight'>{ avaliacao.cliente } - { avaliacao.data }</P>
    </div>
  </div>
