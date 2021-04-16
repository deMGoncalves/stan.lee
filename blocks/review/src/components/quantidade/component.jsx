import h from '@cea/h'
import { P } from '@cea/review/src/uikit'
import style from './style.css'

export default (quantidade) =>
  <P color='blackLight' size='xSmall' className={style.quantidade}>
    <b>baseado em { quantidade.valor }</b> avaliações
  </P>
