import h from '@cea/h'
import style from './style.css'

export default (priorEvaluation) =>
  <a className={style.prior__link} href='#trust-vox'>
    <span className={style.prior__estrela}>{ priorEvaluation.estrela }</span>
    <span className={style.prior__quantidade}>({ priorEvaluation.quantidade })</span>
  </a>
