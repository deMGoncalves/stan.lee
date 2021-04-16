import h from '@cea/h'
import Banner from '@cea/modulos/src/banner'
import BannerTitle from '@cea/modulos/src/bannerTitle'
import ButtonList from '@cea/modulos/src/buttonList'
import define from '@cea/modulos/src/define'
import Hero from '@cea/modulos/src/hero'
import Mobile from '@cea/modulos/src/mobile'
import style from './style.css'

define('highlight-hero-no-text', (props) =>
  <Hero {...props}>
    <Banner {...props}>
      <figcaption className={style.highlightHeroNoText__container}>
        <Mobile>
          <BannerTitle {...props} className={style.highlightHeroNoText__title} />
        </Mobile>
        <ButtonList {...props} dataCollect='internal-banner-link' />
      </figcaption>
    </Banner>
  </Hero>
)
