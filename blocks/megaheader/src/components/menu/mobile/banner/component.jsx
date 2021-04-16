import h from '@cea/h/'
import style from './style.css'
import schema from './schema'

export default () =>
  <section className={style.banner}>
    <a className={style.banner__link} href={schema.url} title={schema.name}>
      <picture className={style.banner__picture}>
        <source srcSet={schema.image} />
        <img className={style.banner__image} alt={schema.name} />
      </picture>
    </a>
  </section>
