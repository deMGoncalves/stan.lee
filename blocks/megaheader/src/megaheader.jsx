import h from '@cea/h'
import * as c from './components'
import style from './style.css'

export default (props) =>
  <header className={style.megaHeader}>
    <c.TopBarAlert className={style.megaHeader__topBarAlert} {...props} />
    <div className={style.megaHeader__container}>
      <c.Lojinha className={style.megaHeader__lojinha} engine={props.engine} />
      <c.Menu className={style.megaHeader__menu} />
      <c.Logo className={style.megaHeader__logo} />
      <c.Search className={style.megaHeader__search} {...props} />
      <c.Bag className={style.megaHeader__bag} />
      <c.Services className={style.megaHeader__services} />
      <c.Region className={style.megaHeader__region} {...props} />
      <c.User className={style.megaHeader__user} />
    </div>
  </header>
