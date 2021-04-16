import h from '@cea/h'
import style from './style.css'

export default (modal, children) =>
  <div className={[style.modal, style[modal.className]]}>
    {children}
  </div>
