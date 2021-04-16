import h, { Repeat } from '@cea/h'
import style from './style.css'

export default (order) =>
  <header className={style.header}>
    <h3 className={style.header__title}>pedido: {order.orderId}</h3>
    <h4 className={style.header__subtitle}>PRODUTOS A SEREM ENVIADOS PARA A SUA CASA</h4>
    <p className={style.header__text}>
      <strong className={style.header__bold}>Endereço de entrega: </strong>
      {order.address.street}, {order.address.number} - {order.address.neighborhood} {order.address.city}, {order.address.state}
    </p>
    <Repeat
      iterator={order.seller}
      component={
        ({ name }) =>
          <p className={style.header__seller}>
            entregue por <strong className={style.header__bold}>{name.replace(/CeA/, 'C&A')}</strong>
          </p>
      }
    />
  </header>
