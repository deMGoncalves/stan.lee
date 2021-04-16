import h from '@cea/h'
import Banner from '@cea/modulos/src/banner'
import define from '@cea/modulos/src/define'
import Mobile from '@cea/modulos/src/mobile'
import style from './style.css'

define('banner-tarja-app', (props) =>
  <Mobile>
    <Banner {...props} className={style.bannerTarjaApp__banner} />
  </Mobile>
)
