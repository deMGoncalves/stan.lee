import h from '@cea/h'
import style from './style.css'
import footerStyle from '@cea/megafooter/src/style.css'

export default (form) =>
  <section className={[style.lead, footerStyle.footer__lead]}>
    <div className={style.form__container} id='form__content__block'>
      <div className={style.form__loader__container} id='form__loading__block'>
        <div className={style.form__loading}>
          <div className={style.form__spinner}>
            <div className={style.form__loader__icon}>
              <span className={style['ceaicon-e-filled']} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.form__campaign}>
        <p className={style.form__heading}>
          <span className={style.form__heading__first}>ganhe </span>
          <span className={style.form__heading__second}>R$</span>
          <span className={style.form__heading__last}>10 </span>
          <p>na sua primeira compra</p>
        </p>
        <p className={style.form__campaing__desc}>Válido por 30 dias para compras acima de R$100,00 exceto para eletrônicos.</p>
      </div>
      <form className={style.form__form} onSubmit_stop_prevent={() => form.enviar()}>
        <div className={style.form__mail}>
          <label htmlFor='email' className={style.form__label}>email</label>
          <input id='email' className={style.form__input} onChange={e => { form.alterarEmail(e.target.value); e.target.setCustomValidity('') }} type='email' placeholder='exemplo@ex.com' onInvalid={(e) => { e.target.setCustomValidity('Este campo deve ser um email válido.') }} required />
          <div className={style.form__msg}>
            <p className={style.form__error} id='formError' />
          </div>
        </div>
        <div className={style.form__gender}>
          <label htmlFor='gender' className={style.form__label}>selecione seu gênero</label>
          <div className={style.form__radio}>
            <label className={style.form__container__radio}>feminino
              <input className={style.form__input__radio} onChange={e => form.alterarGenero(e.target.value)} type='radio' checked='checked' name='radioGender' value='Feminino' />
              <span className={style.form__checkmark} />
            </label>
            <label className={style.form__container__radio}>masculino
              <input className={style.form__input__radio} onChange={e => form.alterarGenero(e.target.value)} type='radio' name='radioGender' value='Masculino' />
              <span className={style.form__checkmark} />
            </label>
          </div>
        </div>
        <button className={style.form__button}>enviar</button>
      </form>
      <div className={style.form__terms}>
        <p>Ao clicar em “Enviar” você aceita os <a href='http://www.cea.com.br/politicas-cea' target='_blank' rel='noopener' className={style.form__link}> termos de uso da C&amp;A</a></p>
      </div>
    </div>
  </section>
