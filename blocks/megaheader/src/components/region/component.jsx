import h, { Show, Hide } from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

export default (region) =>
  <section className={[style.region, region.className]} onClick_prevent_stop={() => region.open()}>
    <Show if={region.toggle}>
      <div className={style.region__box}>
        <span className={style.region__pulse}>Pulse</span>
        <span className={style.region__icon}>Icone</span>
        <p className={style.region__text}>
          <Show if={f.isEmpty(region.address)}>
            <span className={style.region__label}>ative condições e</span>
            <p>ofertas da sua região</p>
          </Show>
          <Hide if={f.isEmpty(region.address)}>
            <span className={style.region__label}>condições especiais para</span>
            <p className={style.region__address}>{region.address}</p>
          </Hide>
        </p>
        <span className={style.region__arrow}>Arrow</span>
      </div>
    </Show>
  </section>
