import h from '@cea/h'
import Lead from './lead'
import Seo from './seo'
import Glossary from './glossary'
import Navigation from './navigation'
import World from './world'
import Payment from './payment'
import Security from './security'
import Disclaimer from './disclaimer'
import Copyright from './copyright'
import Bci from './bci'
import style from './style.css'

export default (props) =>
  <footer className={style.megafooter}>
    <Lead className={style.megafooter_lead} />
    <Seo className={style.megafooter__seo} />
    <Glossary className={style.megafooter__glossary} />
    <Navigation className={style.megafooter__navigation} />
    <World className={style.megafooter__world} />
    <div className={style.megafooter__paymentAndSecurity}>
      <div className={style.megafooter__container}>
        <Payment className={style.megafooter__payment} />
        <Security className={style.megafooter__security} />
      </div>
    </div>
    <Disclaimer className={style.megafooter__disclaimer} {...props} />
    <Copyright className={style.megafooter__copyright} />
    <Bci className={style.megafooter__bci} />
  </footer>
