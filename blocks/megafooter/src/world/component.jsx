import h from '@cea/h'
import oneOff from '@cea/megafooter/src/oneOff'
import style from './style.css'

export default ({ className }) =>
  <section className={[style.world, className]}>
    <div className={style.world__container}>
      <label htmlFor='world__select'>
        <h3 className={style.world__title}>C&A pelo mundo</h3>
      </label>
      <select id='world__select' className={style.world__select} onChange={e => window.open(e.target.value, '_blank')}>
        <option selected disabled>escolha o local</option>
        {
          oneOff.countries.map(({ url, name }) =>
            <option value={url}>{name}</option>
          )
        }
      </select>
      <div className={style.world__list}>
        {
          oneOff.countries.map(({ url, name }) =>
            <a className={style.world__item} href={url} target='_blank' title={name} rel='noreferrer'>{name}</a>
          )
        }
      </div>
    </div>
  </section>
