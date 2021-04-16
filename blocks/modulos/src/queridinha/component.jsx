import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import Figure from '@cea/modulos/src/figure'
import style from './style.css'

export default (props) =>
  <div className={style.queridinha}>
    <Figure
      data-collect={f.or(props.dataCollect, 'internal-banner')}
      data-collect-info={f.or(props.utmiCampaign, '')}
      className={[style.figure, style.queridinha__figure]}
      onClick={() => location.assign(props.linkUrl)}
      desktopUrl={props.imageUrl}
      alt={f.or(props.alt, props.name)}
    >
      <figcaption>
        <p className={[style.queridinha__title, style[props.type]]}>{props.name}</p>
        <Hide if={f.isEmpty(props.price)}>
          <data className={style.queridinha__price} value={props.price}>{props.price}</data>
        </Hide>
      </figcaption>
    </Figure>
  </div>
