import h from '@cea/h'
import oneOff from '@cea/megafooter/src/oneOff'
import style from './style.css'

export default ({ className }) =>
  <section className={[style.seo, className]}>
    <div className={style.seo__container}>
      {
        oneOff.departaments.map(({ url, name, categories }, index) =>
          <dl className={style.seo__block}>
            <div onClick={() => document.getElementById('cat' + index).classList.toggle(style.seo__open)}>
              <dt className={style.seo__title}>
                <a className={style.seo__link} href={url} title={name}>{name}</a>
                <span className={style.seo__arrow} />
              </dt>
            </div>
            <div className={style.seo__list} id={'cat' + index}>
              {
                categories.map(({ url, name }) =>
                  <dd className={style.seo__item}>
                    <a className={style.seo__link} href={url} title={name}>{name}</a>
                  </dd>
                )
              }
            </div>
          </dl>
        )
      }
    </div>
  </section>
