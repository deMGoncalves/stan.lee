import h from '@cea/h'
import style from './style.css'

export default (props, children) =>
  <div className={style.boxgray}>
    <h6 className={[style.boxgray__title, style[`boxgray__${props.title.toLowerCase().substring(0, 3)}`]]}>
      {props.title}
    </h6>
    <p className={style.boxgray__text}>{children}</p>
  </div>
