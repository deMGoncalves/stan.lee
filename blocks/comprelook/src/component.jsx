import h from '@cea/h'
import style from './style.css'

export default (props) =>
  <div className={style.compreLook}>
    <span className={style.compreLook__description}>Gostou da nossa composição?</span>   
    <a className={style.compreLook__link} href='#' onClick_prevent_stop={() => location.assign(`/compre-o-look?&mainProductId=${props.productId}&fq=${props.products}`)}>
      <i class="glyph-icon glyph_zz_20160912_01_cabide" />
      Compre o look
    </a>
  </div>