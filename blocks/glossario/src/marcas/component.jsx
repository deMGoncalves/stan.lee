import h, { Repeat, Show, Hide } from '@cea/h'
import * as f from '@cea/f'
import Letra from './letra'
import style from './style.css'

export default (marcas) => {
  return (
    <section>
      <Hide if={f.isEmpty(marcas.lista)}>
        <Repeat iterator={marcas.lista} component={Letra} />
      </Hide>
      <Show if={f.isEmpty(marcas.lista)}>
        <section className={style.glossariomarcas__section}>
          <div className={style.glossariomarcas__div}>
            nenhuma marca encontrada
          </div>
        </section>
      </Show>
    </section>
  )
}
