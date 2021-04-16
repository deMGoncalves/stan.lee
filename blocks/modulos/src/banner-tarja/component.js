import h from '@cea/h'
import Banner from '@cea/modulos/src/banner'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import style from './style.css'

define('banner-tarja', (props) =>
  <Modulo {...props}>
    <Banner {...props} className={style.bannerTarja__banner} />
  </Modulo>
)
