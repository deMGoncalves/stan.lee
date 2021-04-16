import h from '@cea/h'
import style from './style.css'
import * as s from '@shared/'

import Banner from '@components/menu/mobile/banner'
import Hamburguer from '@components/menu/mobile/hamburguer'

export default (menu) =>
  <section className={[style.menu]}>
    <Hamburguer click={() => menu.open()} />
    <s.Modal className={menu.status}>
      <Banner />
      <nav className={style.menu__navigation} onClick_stop={(event) => menu.propagation(event.target)}>
        {menu.login}

        <s.Modal className={menu.logonNavigation}>
          <s.Breadcrumb className={style.menu__bread} collection={['voltar']} click={() => menu.back()} />
          <s.Close />
          <div className={style.menu__copyLogin}>
            {menu.copyLogin}
          </div>
          <s.Heading content='minha conta' />
          <s.AccountList />
          <s.Heading content='serviço muito eu' />
          <s.ServicesList />
          <s.ImageLink
            name='sair desta conta'
            url={`https://www.cea.com.br/no-cache/user/logout?returnUrl=${window.location.href}`}
            icon='Exit'
            className={style.menu__exit}
          />
        </s.Modal>

        <s.Heading content='navegue por categoria' />
        {menu.departments}
        <s.Heading content='serviços muito eu' />
        <s.ServicesList />
      </nav>
    </s.Modal>
    <s.Overlay className={menu.status} click={() => menu.close()} />
  </section>
