import h from '@cea/h'
import style from './style.css'

import ServicesList from './servicesList'

export default (modal) =>
  <div>
    <div className={[style.modal, style[modal.status]]} onClick_stop={() => null}>
      <div>{modal.back}</div>
      <div>{modal.login}</div>
      <div>{modal.userList}</div>
      <ServicesList login={modal.loginOn} />
    </div>
    <span className={[style.modal__overlay, style[modal.status]]} onClick_stop={() => modal.close()}>Fechar</span>
  </div>
