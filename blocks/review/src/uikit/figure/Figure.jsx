import h from '@cea/h'
import * as f from '@cea/f'
import Hide from '../hide'
import style from './style.css'

export default (props, children) =>
  <figure
    data-collect={f.or(props.dataCollect, 'internal-banner')}
    data-collect-info={f.or(props.dataCollectInfo, props.utmiCampaign)}
    className={[style.figure, props.className, style[f.not(f.isEmpty(props.href)) ? 'hover' : 'noHover']]}
    onClick_stop={() => f.not(f.isEmpty(props.href)) && location.assign(props.href)}>
    <Hide if={f.isEmpty(f.or(props.mobileSrc, props.tabletSrc, props.desktopSrc))}>
      <picture className={style.figure__picture}>
        <source srcSet={f.or(props.mobileSrc, props.tabletSrc, props.desktopSrc)} media='(max-width: 767px)' />
        <source srcSet={f.or(props.tabletSrc, props.desktopSrc, props.mobileSrc)} media='(min-width: 768px) and (max-width: 959px)' />
        <source srcSet={f.or(props.desktopSrc, props.tabletSrc, props.mobileSrc)} media='(min-width: 960px)' />
        <img className={[style.figure__img, style[props.size]]} src={props.mobileSrc} loading='lazy' height='200' width='768' alt={props.alt} />
      </picture>
    </Hide>
    <figcaption className={[style.figure__figcaption, style[props.mode], style[props.align], style[props.vAlign]]}>
      { children }
    </figcaption>
  </figure>
