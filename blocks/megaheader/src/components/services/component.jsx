import h, { Fragment } from '@cea/h'
import style from './style.css'
import icon from '@cea/icon'

export default (services) =>
  <Fragment>
    <section className={[style.services, services.className]} onClick_stop={() => services.open()}>
      <icon.Mesage className={style.services__icon} />
      {/* <span className={style.services__icon}>Icone</span> */}
      <label className={style.services__label}>
        <span className={style.services__heading}>serviços e</span>
        atendimento
      </label>
      {services.modal}
    </section>

    <nav className={style.services__list}>
      {services.list.map((item) =>
        <a className={[style.services__link, style[item.icon]]} href={item.url} title={item.name}>{item.name}</a>
      )}
    </nav>
  </Fragment>
