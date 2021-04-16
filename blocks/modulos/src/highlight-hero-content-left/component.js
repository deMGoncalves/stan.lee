import h from '@cea/h'
import Banner from '@cea/modulos/src/banner'
import BannerTitle from '@cea/modulos/src/bannerTitle'
import Button from '@cea/modulos/src/button'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import style from './style.css'

define('highlight-hero-content-left', props =>
  <Modulo {...props}>
    <Banner className={style.highlightHeroContentLeft__banner} {...props}>
      <figcaption className={style.highlightHeroContentLeft__container}>
        <strong className={style.highlightHeroContentLeft__hashTag}>{ props.self.hashTag }</strong>
        <BannerTitle {...props} />
        <p className={style.highlightHeroContentLeft__description}>{ props.self.bannerDescription }</p>
        <Button className={style.highlightHeroContentLeft__button} {...props} />
      </figcaption>
    </Banner>
  </Modulo>
)
