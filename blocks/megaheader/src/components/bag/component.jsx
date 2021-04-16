import h from '@cea/h'
import style from './style.css'
import icon from '@cea/icon'

export default (bag) =>
  <section className={[style.bag, bag.className]}>
    <a className={style.bag__link} href={bag.link} title='Ir para o carrinho' data-count={bag.count}>
      <icon.Bag />
    </a>
  </section>
