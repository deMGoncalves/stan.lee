import h from '@cea/h'
import Banner from '@cea/modulos/src/banner'
import BannerTitle from '@cea/modulos/src/bannerTitle'
import Button from '@cea/modulos/src/button'
import define from '@cea/modulos/src/define'
import Mobile from '@cea/modulos/src/mobile'
import Modulo from '@cea/modulos/src/modulo'
import style from './style.css'

define('highlight-banner', (props) =>
  <Modulo {...props}>
    <Banner {...props}>
      <figcaption className={style.highlightBanner__container}>
        <BannerTitle {...props} className={style.highlightBanner__title} />
        <Mobile>
          <Button {...props} />
        </Mobile>
      </figcaption>
    </Banner>
  </Modulo>
)
