import h, { Show } from '@cea/h'
import style from './style.css'

export default ({ login }) =>
  <nav className={style.servicesList}>
    <p className={style.servicesList__title}>serviços muito eu</p>
    <Show if={!login}>
      <a className={[style.servicesList__link, style.servicesList__linkCeaVc]} href='https://www.cea.com.br/evc-programa-de-relacionamento' title='faça parte do C&amp;A&amp;VC'>
        faça parte do C&amp;A&amp;VC
      </a>
    </Show>
    <a className={[style.servicesList__link, style.servicesList__linkBuyWhats]} href='https://wa.me/551135852892' title='comprar pelo Whatsapp' rel='noreferrer' target='_blank'>
      comprar pelo Whatsapp
      <label className={style.servicesList__label}>Novo</label>
    </a>
    <a className={[style.servicesList__link, style.servicesList__linkSearchStore]} href='https://www.cea.com.br/lojas' title='encontrar lojas'>
      encontrar lojas
    </a>
    <a className={[style.servicesList__link, style.servicesList__linkSac]} href='https://atendimentocea.zendesk.com/hc/pt-br' title='atendimento'>
      central de atendimento
    </a>

    <Show if={login}>
      <a className={[style.servicesList__link, style.servicesList__logOut]} href={`https://www.cea.com.br/no-cache/user/logout?returnUrl=${window.location.href}`}>sair desta conta</a>
    </Show>
  </nav>
