import h from '@cea/h'
import Img from '@cea/megafooter/src/img'
import style from './style.css'

export default ({ title, target }) =>
  <div>
    <div className={style.navigation__titleSocial}>{ title }</div>
    <div className={style.navigation__images}>
      {
        target.map(([value, href, alt]) =>
          <span className={style.navigation__textlink}>
            <a className={style.navigation__link} href={href} target='_blank' rel='noreferrer' title={alt}>
              <Img className={style.navigation__connect} mobileUrl={value} alt={alt} />
            </a>
          </span>
        )
      }
    </div>
    <div className={style.navigation__app}>
      <a className={style.navigation__appcontent} href='https://go.onelink.me/2RmC/footersite' target='_blank' rel='noreferrer' title='APP C&A - Conheça as Vantagens'>
        <strong className={style.navigation__ceatext}>app C&A</strong>
        <p className={style.navigation_benefits}>conheça as vantagens</p>
      </a>
    </div>
  </div>
