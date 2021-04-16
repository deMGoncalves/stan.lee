import h from '@cea/h'
import style from './style.css'

export default ({ title, target }) =>
  <dl className={style.navigation__accordion}>
    <dt className={[style.navigation__title, style.arrow]} onClick={e => e.target.parentNode.classList.toggle(style.active)}>
      { title }
      <span className={style.navigation__arrow} />
    </dt>
    {
      target.map(([value, href, title]) =>
        <dd className={style.navigation__item}>
          <a className={style.navigation__link} href={href} title={title}>{ value }</a>
        </dd>
      )
    }
  </dl>
