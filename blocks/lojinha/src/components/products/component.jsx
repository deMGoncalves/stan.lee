import h, { Repeat } from '@cea/h'
import Product from './product'
import style from './style.css'

export default (attr) =>
  <ul className={style.products}>
    <Repeat iterator={attr.collection} component={Product} />
  </ul>
