import h from '@cea/h'
import BracketList from '@cea/modulos/src/bracketList'
import define from '@cea/modulos/src/define'
import HalfBanner from '@cea/modulos/src/halfBanner'
import Modulo from '@cea/modulos/src/modulo'
import style from './style.css'

define('highlight-third-half-banner', (props) =>
  <Modulo {...props}>
    <div className={style.highlightThirdHalfBanner}>
      <HalfBanner {...props} className={style.highlightThirdHalfBanner__halfBanner} />
      <BracketList {...props} column='oneToThree' />
    </div>
  </Modulo>
)
