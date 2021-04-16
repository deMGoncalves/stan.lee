import h from '@cea/h'
import style from './style.css'
import { Content } from '@components'
import Products from './products'

export default (sacola) =>
  <main className={style.bag}>
    <hgroup className={style.bag__heading}>
      <h1 className={style.bag__title}>Sacola</h1>
      <h2><em>2</em> Itens</h2>
    </hgroup>

    <Content>
      <Products items={sacola.produtos} />
    </Content>

    <Content>{sacola.frete}</Content>
    <Content>{sacola.cupom}</Content>
    <Content>{sacola.sumario}</Content>

    <div className={style.bag__tooltip}>
      <span className={style.bag__tooltipIcon}>icone</span>
      <p className={style.bag__tooltipText}>
        <em className={style.bag__tooltipDestak}>dinheiro de volta garantido</em>,
        devolva pelo site o que não servir e receba seu dinheiro de volta.
      </p>
    </div>

    <a className={style.bag__link} href='#' title='Escolher mais produtos'>Escolher mais produtos</a>
  </main>
