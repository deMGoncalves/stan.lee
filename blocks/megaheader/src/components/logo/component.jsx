import h from '@cea/h'
import style from './style.css'

export default (logo) =>
  <section className={[style.logo, logo.className]}>
    <img className={style.logo__img} src={logo.src} onClick_prevent_stop={() => logo.redirect()} alt={logo.alt} title={logo.alt} />
  </section>
