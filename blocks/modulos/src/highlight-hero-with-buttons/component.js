import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import Banner from '@cea/modulos/src/banner'
import BannerTitle from '@cea/modulos/src/bannerTitle'
import ButtonList from '@cea/modulos/src/buttonList'
import define from '@cea/modulos/src/define'
import Hero from '@cea/modulos/src/hero'
import style from './style.css'

define('highlight-hero-with-buttons', (props) =>
  <Hero {...props}>
    <Banner {...props}>
      <figcaption className={[style.highlightHeroWithButtons__container, style[props.self.bannerAlignItems]]}>
        <BannerTitle {...props} className={[style.highlightHeroWithButtons__title, style[props.self.bannerAlignItems]]} />
        <Hide if={f.isEmpty(props.self.subtitle)}>
          <p className={[style.highlightHeroWithButtons__subTitle, style[props.self.colorTransform], style[props.self.bannerAlignItems]]}>{ props.self.subtitle }</p>
        </Hide>
        <Hide if={f.isEmpty(props.self.warning)}>
          <p className={[style.highlightHeroWithButtons__warning, style[props.self.colorTransform], style[props.self.bannerAlignItems]]}>{ props.self.warning}</p>
        </Hide>
        <ButtonList {...props} dataCollect='internal-banner-link' className={style.highlightHeroWithButtons__buttons} />
      </figcaption>
    </Banner>
  </Hero>
)
