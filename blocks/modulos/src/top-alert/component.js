import h, { Show } from '@cea/h'
import Img from '@cea/modulos/src/img'
import style from './style.css'

export default ({ self, onClosed }) =>
  <div className={style.topAlert}>
    <Show if={self.iconUrl}>
      <Img className={style.topAlert__icon} src={self.iconUrl} />
    </Show>
    <p className={style.topAlert__text}>
      { self.text }
      <a className={style.topAlert__link} href={self.link[0]}>{ self.link[0] }</a>
    </p>
    <button className={style.topAlert__button} onClick={onClosed}>×</button>
  </div>
