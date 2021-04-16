import h from '@cea/h'
import * as f from '@cea/f'
import * as ui from '../'
import style from './style.css'

export default (props) =>
  <div className={style.queridinha}>
    <ui.Figure
      mobileSrc={props.imageSrc}
      alt={props.alternativeText}
      mode='out'
      align='center'
      vAlign='top'
      className={style.queridinha__figure}>
      <ui.H3
        className={style.queridinha__title}>{props.productName}</ui.H3>
      <ui.Hide if={f.isEmpty(props.productPrice)}>
        <data value={props.productPrice} className={style.queridinha__price} >{props.productPrice}</data>
      </ui.Hide>
    </ui.Figure>
  </div>
