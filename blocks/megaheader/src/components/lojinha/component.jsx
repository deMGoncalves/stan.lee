import h, { Show } from '@cea/h'
import style from './style.css'

export default (lojinha) =>
  <section className={[style.lojinha, lojinha.className]}>
    <Show if={!!lojinha.data?.name}>
      <div className={style.lojinha__content}>
        <picture className={style.lojinha__avatar}>
          <source srcSet={lojinha.data?.thumbnail} />
          <img className={style.lojinha__image} alt={lojinha.data?.name} />
        </picture>
        <p className={style.lojinha__text}>
          comprando com
          <a href={lojinha.link} className={style.lojinha__label} title={lojinha.data?.name}>{lojinha.data?.name}</a>
        </p>
        <span className={style.region__arrow}>Arrow</span>
      </div>
    </Show>
  </section>
