import h from '@cea/h'
import style from './style.css'
import Header from './header'

import Servicelists from '@shared/serviceslist'

export default (modal) =>
  <div>
    <div className={[style.modal, style[modal.status]]} onClick_stop={() => null}>
      {modal.back}
      <Header />

      <nav className={style.modal__list}>
        <p className={style.modal__title}>serviços muito eu</p>
        <Servicelists />
      </nav>
    </div>
    <span className={[style.modal__overlay, style[modal.status]]} onClick_stop={() => modal.close()}>Fechar</span>
  </div>
