import h from '@cea/h'
import Banner from '@cea/modulos/src/banner'
import BannerTitle from '@cea/modulos/src/bannerTitle'
import BracketList from '@cea/modulos/src/bracketList'
import Button from '@cea/modulos/src/button'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import style from './style.css'

define('promogrid-five-banner', (props) =>
  <Modulo {...props}>
    <div className={style.promogridFiveBanner__row}>
      <div className={style.promogridFiveBanner__column}>
        <Banner {...props} className={style.promogridFiveBanner__banner}>
          <figcaption className={style.promogridFiveBanner__container}>
            <BannerTitle {...props} className={style.promogridFiveBanner__title} />
            <Button {...props} />
          </figcaption>
        </Banner>
      </div>
      <div className={style.promogridFiveBanner__column}>
        <BracketList {...props} column='twoToTwo' />
      </div>
    </div>
  </Modulo>
)
