import h from '@cea/h'
import style from './style.css'

export default ({ imageUrl, name, quantity, price }) =>
  <div className={style.product}>
    <img className={style.product__image} src={imageUrl} alt={name} />
    <p className={style.product__name}>{name}</p>
    <p className={style.product__quantity}>Qtd: <strong>{quantity}</strong></p>
    <p className={style.product__price}>valor: <strong>{price}</strong></p>
  </div>
