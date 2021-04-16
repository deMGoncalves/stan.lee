import h from '@cea/h'
import style from './style.css'

export default (logon) =>
  <section className={style.logon}>
    <div className={style.logon__perfil}>
      <span className={style.logon__avatar}>{logon.fullName.charAt(0)}</span>
      <p className={style.logon__text}>
        <span className={style.logon__name}>{logon.fullName}</span>
        {/* <a
          className={style.logon__url}
          href='/_secure/minha-conta#/cea-e-vc/inicio'
          title='faça parte do C&A VC'
        >
          faça parte do C&amp;A&amp;VC
        </a> */}
      </p>
    </div>
  </section>
