import h from '@cea/h'
import style from './style.css'

import Button from '@cea/modulos/src/button'
import Metro from '@cea/modulos/src/metro'
import Modulo from '@cea/modulos/src/modulo'
import ProductCard from '@cea/productcard'


export default (props) => (
  <Modulo self={...props} className={style.vitrine}>
    <Metro columns='4'>
      {props.renderedProductList}
    </Metro>
    <Button self={...props} />
  </Modulo>
)
