import h from '@cea/h'
import * as f from '@cea/f'
import Img from '@cea/modulos/src/img'
import style from './style.css'

export default (props, children) =>
  <figure
    style={props.style}
    data-collect={f.or(props.dataCollect, 'internal-banner')}
    data-collect-info={f.or(props.dataCollectInfo, '')}
    className={[style.figure, props.className]}
    onClick={(e) => f.or(props.onClick, f.always(null))(e)}>
    <picture className={style.figure__picture}>
      <Img
        className={style.figure__img}
        mobileUrl={props.mobileUrl}
        tabletUrl={props.tabletUrl}
        desktopUrl={props.desktopUrl}
        alt={props.alt} />
    </picture>
    { children }
  </figure>
