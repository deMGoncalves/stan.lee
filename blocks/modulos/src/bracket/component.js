import h, { Show, Hide } from '@cea/h'
import * as f from '@cea/f'
import Figure from '@cea/modulos/src/figure'
import style from './style.css'

const description = (self, n) => {
  const p = document.createElement('p')
  const html = self[`bracket${n}Description`] || ''
  p.classList.add(style.bracket__description)
  p.innerHTML = html.includes('{{') ? html.replace(/{{(.*?)\|(.*?)}}/gmi, "<a target='_blank' href='$1'>$2</a>") : html
  return p
}

export default ({ self, n }) =>
  <Figure
    className={[style.bracket__figure, self[`bracket${n}Link`][1] ? style.cursor : '']}
    dataCollectInfo={self[`bracket${n}UtmiCampaign`]}
    mobileUrl={self[`bracket${n}MobileImageUrl`]}
    tabletUrl={self[`bracket${n}TabletImageUrl`]}
    desktopUrl={self[`bracket${n}DesktopImageUrl`]}
    onClick={() => self[`bracket${n}Link`][1] && location.assign(self[`bracket${n}Link`][1])}
  >
    <figcaption className={style.bracket__container}>
      <p className={style.bracket__title}>{self[`bracket${n}Title`]}</p>
      <Show if={self[`bracket${n}Description`]}>
        {description(self, n)}
      </Show>
      <Hide if={f.isEmpty(self[`bracket${n}Link`][1])}>
        <a
          data-collect='internal-banner-link'
          data-collect-info={self[`bracket${n}UtmiCampaign`]}
          className={style.bracket__link}
          href={self[`bracket${n}Link`][1]}
        >
          {self[`bracket${n}Link`][0]}
        </a>
      </Hide>
    </figcaption>
  </Figure>
