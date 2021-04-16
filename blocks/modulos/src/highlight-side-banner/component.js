import h from '@cea/h'
import Banner from '@cea/modulos/src/banner'
import BannerTitle from '@cea/modulos/src/bannerTitle'
import ButtonList from '@cea/modulos/src/buttonList'
import define from '@cea/modulos/src/define'
import Hero from '@cea/modulos/src/hero'
import style from './style.css'

define('highlight-side-banner', (props) =>
  <Hero {...props}>
    <Banner {...props}>
      <figcaption className={style.highlightSideBanner__container}>
        <BannerTitle {...props} className={style.highlightSideBanner__title} />
        <ButtonList {...props} dataCollect='internal-banner-link' />
      </figcaption>
    </Banner>
  </Hero>
)
