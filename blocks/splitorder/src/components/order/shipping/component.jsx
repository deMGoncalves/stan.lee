import h from '@cea/h'
import style from './style.css'

export default (order) =>
  <p className={style.shipping}>
    <strong className={style.shipping__bold}>{order.freight.type}</strong> - {order.freight.estimated} - {order.freight.price}
  </p>
