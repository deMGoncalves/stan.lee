import h from '@cea/h'
import style from './style.css'

export default () =>
  <nav className={style.userList}>
    <p className={style.userList__title}>minha conta</p>
    <a className={[style.userList__link, style.userList__requests]} href='//www.cea.com.br/_secure/minha-conta#/pedidos' title='meus pedidos'>meus pedidos</a>
    <a className={[style.userList__link, style.userList__profile]} href='//www.cea.com.br/_secure/minha-conta#/dados' title='meu perfil'>meu perfil</a>
    <a className={[style.userList__link, style.userList__ceaevc]} href='//www.cea.com.br/_secure/minha-conta#/cea-e-vc/inicio' title='faça parte do C&amp;A&amp;VC'>C&amp;A&amp;VC</a>
    <a className={[style.userList__link, style.userList__delivery]} href='//www.cea.com.br/_secure/minha-conta#/enderecos' title='endereços de entrega'>endereços de entrega</a>
    <a className={[style.userList__link, style.userList__favorite]} href='//www.cea.com.br/_secure/minha-conta#/lista-de-desejos' title='lista de favoritos'>lista de favoritos</a>
    <a className={[style.userList__link, style.userList__returns]} href='https://www.cea.com.br/login' title='acompanhar devoluções'>acompanhar devoluções</a>
  </nav>
