import h from '@cea/h'
import style from './style.css'

const qtd = (qtd) => qtd > 4 ? 4 : qtd

export default ({ data, small }) =>
  <section className={[style.banner, style[small]]}>
    <div className={style.banner__box}>
      <p className={style.banner__heading}>tendências</p>
      {
        data.map((item) =>
          <a className={[style.banner__link, style[`quantity__${qtd(data.length)}`]]} href={item.url} title={item.name}>
            <picture className={style.banner__picture}>
              <source srcSet={item.image} />
              <img className={style.banner__image} loading='lazy' src={item.image} alt={item.name} title={item.name} />
            </picture>
          </a>
        ).slice(0, 4)
      }
    </div>
  </section>
