import h, {Raw} from '@cea/h'
import style from './style.css'

export default (props) => (
  <div className={['product-flags', style.productCard__flags]}>
    <Raw>{props.slugClusterHighlights()}</Raw>
  </div>
)
