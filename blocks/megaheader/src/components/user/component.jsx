import h from '@cea/h'
import style from './style.css'

export default (user) =>
  <section className={[style.user, user.className]} onClick_prevent_stop={() => user.open()}>
    <span className={style.user__icon}>Icone</span>
    <p className={style.user__text}>
      <span className={style.user__label}>{user.fullName}</span>
      meus pedidos
    </p>
    <span className={style.user__arrow}>Arrow</span>
    {user.modal}
  </section>
