import h, { Show } from '@cea/h'
import style from './style.css'

export default (menu) =>
  <section className={[style.menu, menu.className]}>
    <Show if={menu.navigation}>
      {menu.navigation}
    </Show>
  </section>
