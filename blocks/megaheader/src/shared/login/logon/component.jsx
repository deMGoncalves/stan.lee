import h from '@cea/h'
import style from './style.css'

import icon from '@cea/icon'

export default ({ fullName }) =>
  <section className={style.logon} data-logon={fullName}>
    <div className={style.logon__perfil}>
      <span className={style.logon__avatar}>{fullName.charAt(0)}</span>
      <p className={style.logon__text}>
        <span className={style.logon__name}>{fullName}</span>
      </p>
      <icon.ArrowRight small />
    </div>
  </section>
