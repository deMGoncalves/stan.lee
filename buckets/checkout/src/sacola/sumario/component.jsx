import h from '@cea/h'
import style from './style.css'

export default () =>
  <ul className={style.sumario}>
    <li className={style.sumario__item}>
      <label>Subtotal</label> R$ 193,88
    </li>
    <li className={style.sumario__item}>
      <label>Entrega</label> R$ 5,90
    </li>
    <li className={style.sumario__item}>
      <label>Descontos</label> R$ 0,00
    </li>
  </ul>
