import h, { Hide, Raw, Show } from '@cea/h'
import Mask from '@cea/mask'
import style from './style.css'

export default (product) => (
  <div className={style.productCard}>
    <div className={style.productCard__imageContainer} onClick_stop={() => location.assign(product.url)}>
      { product.renderProductImages() }
    </div>
    <Show if={product.showFlags}>
      {product.renderProductFlags()}
    </Show>
    <a href={product.url} className={style.productCard__title}>{product.title}</a>
    <Show if={product.hasStock}>
      <a href={product.url} className={style.productCard__price}>
        <span className={style.productCard__priceParcelTitle}>em até</span>
        <span className={style.productCard__installmentDetails}>
          <strong className={style.productCard__installment}>{product.maxInstallment}x</strong> de  
          <strong className={style.productCard__installmentPrice}> R$<Mask.currency>{product.installmentPrice}</Mask.currency></strong>
        </span>
        <span className={style.productCard__cardtxt}>no cartão C&A <strong>sem juros</strong></span>
        <span>ou R$<Mask.currency>{product.price}</Mask.currency> à vista</span>
      </a>
    </Show>
    <Hide if={product.hasStock}>
      <a href={product.url} className={style.productCard__unavailable}>Indisponível</a>
    </Hide>
  </div>
)
