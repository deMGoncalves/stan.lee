import h from '@cea/h'
import { P } from '@cea/review/src/uikit'
import style from './style.css'

export default (recomendacao) =>
  <div className={style.container}>
    <data value={recomendacao.valor} className={style.porcentagem}>{recomendacao.valor}%</data>
    <P color='blackLight' size='xSmall' className={style.texto}>dos clientes recomendam este produto!</P>
  </div>
