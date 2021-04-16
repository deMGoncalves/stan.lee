import h from '@cea/h'
import Banner from '@cea/modulos/src/banner'
import BannerTitle from '@cea/modulos/src/bannerTitle'
import Button from '@cea/modulos/src/button'
import style from './style.css'

export default (props) =>
  <Banner {...props} className={[style.halfBanner__banner, props.className]}>
    <figcaption className={style.halfBanner__container}>
      <BannerTitle {...props} className={style.halfBanner__title} />
      <Button {...props} />
    </figcaption>
  </Banner>
