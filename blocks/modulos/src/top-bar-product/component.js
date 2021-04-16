import h, { Hide, Fragment, Raw } from '@cea/h'
import style from './style.css'

export default ({props}) =>
  <>
    <Hide if={props.hideModule}>
      <div className={style.topBar}>
        <a href={props.url} className={style.topBar__text} style={props.textStyles}  onClick_prevent_stop={()=>props.redirect()}>
          <Raw>{props.text}</Raw>
        </a>
      </div>
    </Hide>
  </>
