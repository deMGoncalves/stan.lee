import h from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

import Header from './header'
import Product from './product'
import Shipping from './shipping'
import Footer from './footer'

export default (orders) =>
  <section className={style.order}>
    {f.map(orders.sellers, (order) =>
      <div id={order.orderId}>
        <Header {...order} />
        <table className={style.order__table}>
          <thead>
            <tr>
              <th>produtos</th>
              <th>opção de entrega</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Product {...order} /></td>
              <td><Shipping {...order} /></td>
            </tr>
          </tbody>
        </table>
        <Footer {...order} />
      </div>
    )}
  </section>
