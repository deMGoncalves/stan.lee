import h, { Fragment, Show } from '@cea/h'
import style from './style.css'
import icon from '@cea/icon'
import Picture from '@cea/picture'

export default (props) =>
  <>
    <Show if={props.showFloater()}>
      <div className={[style.floater, style.fadeIn, style[props.colorTransform], style[props.floaterAlign]]}>
        <button className={style.floater__closebtn} onClick_stop={() => props.closeFloater(style.floater)}>
          <icon.CloseWhite small alt='icone fechar floater' />
        </button>
        <div className={style.floater__imageContainer}>
          <Picture {...props} className={style.floater__picture}>
            <source media='(min-width:500px)' srcSet={props.desktopImageUrl} />
            <source srcSet={props.mobileImageUrl} />
          </Picture>
        </div>
        <div className={[style.floater__body, style[props.cursorType]]} onClick_stop={() => props.redirect()}>
          <Show if={props.icon}>
            <img src={props.icon} className={style.floater__icon} alt='ícone floater' />
          </Show>
          <Show if={props.text}>
            <p className={style.floater__text}>
              {props.text}
            </p>
          </Show>
          <Show if={props.urlButton}>
            <a className={style.floater__msgbtn} href={props.urlButton} target={props.getUrlTarget()}>
              {props.textButton}
            </a>
          </Show>
        </div>
      </div>
    </Show>
  </>
