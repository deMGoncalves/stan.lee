import h from '@cea/h'
import style from './style.css'

export default ({ click, className }) =>
  <span className={[style.overlay, style[className]]} onClick={() => click()}>Fechar</span>
