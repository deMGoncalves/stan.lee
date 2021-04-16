import h from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

import icon from '@cea/icon'

export default () =>
  <section className={style.logoff}>
    <span className={style.logoff__avatar} />

    <p className={style.logoff__text}>
      <span className={style.logoff__textDestak}>Entre ou cadastre-se</span>
      Seus pedidos, favoritos, conta...
    </p>

    <a className={style.logoff__buttonEnter} href={`https://www.cea.com.br/login?returnUrl=${f.prop('[0]', location.href.split('searchState'))}`}>Entrar</a>
    <a className={style.logoff__buttonCancel} href={`https://www.cea.com.br/login?returnUrl=${f.prop('[0]', location.href.split('searchState'))}`}>Criar uma conta</a>
    <icon.ArrowRight small />
  </section>
