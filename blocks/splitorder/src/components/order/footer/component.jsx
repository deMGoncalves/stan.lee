import h, { Repeat } from '@cea/h'
import sumario from './sumario'
import style from './style.css'

import Boxgray from './box-gray'
import formatPrice from '@root/formatPrice'

export default (order) =>
  <footer className={style.footer}>
    <Boxgray title='Formas de pagamento'>
      <span className={order.payment.paymentSystemName.toLowerCase().includes('boleto') && style.footer__boleto}>
        {order.payment.paymentSystemName}
      </span>
      {formatPrice(order.payment.value)} à vista
    </Boxgray>

    <Boxgray title='Resumo'>
      <Repeat iterator={order.sumario} component={sumario} />
      <p className={style.footer__total}>
        <span>Total</span> {formatPrice(order.total)}
      </p>
    </Boxgray>
  </footer>
