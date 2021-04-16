import h from '@cea/h'
import * as f from '@cea/f'
import Figure from '@cea/modulos/src/figure'
import style from './style.css'

export default (props) =>
  <div className={style.post}>
    <Figure
      dataCollectInfo={props.utmiCampaign}
      mobileUrl={props.imageUrl}
      alt={f.or(props.alt, props.name)}
      onClick={() => location.assign(props.linkUrl)}
      className={style.post__figure}
    >
      <figcaption className={style.post__container}>
        <p className={[style.post__title, style[props.type]]}>{props.name}</p>
        <a
          data-collect='internal-navigation'
          data-collect-info={props.utmiCampaign}
          className={style.post__link}
          href={props.linkUrl}
        >
          {f.or(props.titleUrl, 'saiba mais')}
        </a>
      </figcaption>
    </Figure>
  </div>
