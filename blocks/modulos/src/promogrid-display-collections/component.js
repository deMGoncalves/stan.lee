import h from '@cea/h'
import Banner from '@cea/modulos/src/banner'
import BannerTitle from '@cea/modulos/src/bannerTitle'
import BracketList from '@cea/modulos/src/bracketList'
import Button from '@cea/modulos/src/button'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import style from './style.css'

define('promogrid-display-collections', (props) =>
  <Modulo {...props}>
    <Banner {...props} className={style.promogridDisplayCollections__banner}>
      <figcaption className={style.promogridDisplayCollections__container}>
        <BannerTitle {...props} className={style.promogridDisplayCollections__title} />
        <Button {...props} />
      </figcaption>
    </Banner>
    <BracketList {...props} column='oneToFour' />
  </Modulo>
)
