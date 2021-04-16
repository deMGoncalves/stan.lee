import h, { Hide, Fragment } from '@cea/h'
import formatPrice from '@root/formatPrice'
import style from './style.css'

const sumario = {
  Items: 'Subtotal',
  Shipping: 'Entrega'
}

export default ({ id, value }) =>
  <>
    <Hide if={+value <= 0}>
      <div className={style.sumario}>
        <span>{sumario[id]}</span> {formatPrice(value)}
      </div>
    </Hide>
  </>
