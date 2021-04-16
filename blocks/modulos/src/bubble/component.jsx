import h, { Show, Hide } from '@cea/h'
import * as f from '@cea/f'
import Figure from '@cea/modulos/src/figure'
import style from './style.css'

export default (props) =>
  <div className={[style.bubble, props.className]}>
    <Hide if={f.isEmpty(props.tooltip)}>
      <span className={style.bubble__tooltip} data-tooltip={props.tooltip}>i</span>
    </Hide>
    <Figure
      data-collect='internal-banner'
      data-collect-info={f.or(props.utmiCampaign, '')}
      className={[style.figure, style.cursor, style.bubble__figure, props.status]}
      onClick={() => f.isEmpty(props.tooltip) && location.assign(props.linkUrl)}
      desktopUrl={props.imageSrc}
      alt={f.or(props.alt, props.categoryName)}
    >
      <figcaption>
        <Show if={f.isEmpty(props.tooltip)}>
          <a href={props.linkUrl} className={[style.bubble__title, style[props.status]]}>
            {props.categoryName}
          </a>
        </Show>
        <Hide if={f.isEmpty(props.tooltip)}>
          <p className={style.bubble__title}>{props.categoryName}</p>
        </Hide>
      </figcaption>
    </Figure>
  </div>
