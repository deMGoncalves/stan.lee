import h from '@cea/h'
import Banner from '@cea/modulos/src/banner'
import define from '@cea/modulos/src/define'
import Desktop from '@cea/modulos/src/desktop'
import Modulo from '@cea/modulos/src/modulo'

define('banner-tarja-desktop', (props) =>
  <Modulo {...props}>
    <Desktop>
      <Banner {...props} className='bannerTarjaDesktop__banner' />
    </Desktop>
  </Modulo>
)
