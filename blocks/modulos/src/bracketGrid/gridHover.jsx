import h from '@cea/h'
import style from './style.css'

export default props => (
  <div className={style.gridBlock__product}>
    <img className={style.gridBlock__productImg} src={props.produto.imageUrl} />
    <div className={style.gridBlock__productInfo}>
      <p className={style.gridBlock__productName}>
        {props.produto.productTitle}
      </p>
      <p className={style.gridBlock__productPreco}>
        {props.produto.installments}x R$ {props.produto.value}
      </p>
    </div>
  </div>
)
