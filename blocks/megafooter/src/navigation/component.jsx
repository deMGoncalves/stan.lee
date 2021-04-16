import h from '@cea/h'
import Column from './Column'
import oneOff from '@cea/megafooter/src/oneOff'
import Social from './Social'
import style from './style.css'

export default ({ className }) =>
  <section className={[style.navigation, className]}>
    <div className={style.navigation__container}>
      <div className={style.navigation__left}>
        <div className={style.navigation__colsLeft}>
          <Column title='Institucional' target={oneOff.institucional} />
        </div>
        <div className={style.navigation__colsLeft}>
          <Column title='C&A&VC' target={oneOff.ceaevc} />
          <Column title='cartão C&A' target={oneOff.cartaocea} />
          <Column title='cartão presente' target={oneOff.cartaopresente} />
        </div>
        <div className={style.navigation__colsLeft}>
          <Column title='serviços' target={oneOff.servicos} />
          <Column title='mindse7' target={oneOff.mindse7} />
        </div>
        <div className={style.navigation__colsLeft}>
          <Column title='galeria C&A' target={oneOff.galeria} />
          <Column title='atendimento' target={oneOff.atendimento} />
          <Column title='eventos' target={oneOff.eventos} />
        </div>
      </div>
      <div className={style.navigation__right}>
        <div className={style.navigation__colsRight}>
          <Social title='permaneça conectado' target={oneOff.conectado} />
        </div>
      </div>
    </div>
  </section>
