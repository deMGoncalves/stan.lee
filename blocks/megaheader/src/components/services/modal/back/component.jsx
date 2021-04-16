import h from '@cea/h'
import style from './style.css'

export default (back) =>
  <header className={style.back}>
    <label className={style.back__label} onClick_prevent_stop={() => back.click()}>
      <span className={style.back__icon}>voltar</span>
      Voltar
    </label>
  </header>
