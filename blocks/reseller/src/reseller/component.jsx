import h, { Show } from '@cea/h'
import style from './style.css'

export default (reseller) =>
  <section className={style.reseller}>
    <header className={style.reseller__header}>
      <label className={style.reseller__label} htmlFor='code'>Código da consultora</label>
      <Show if={reseller.addButton}>
        <a className={style.reseller__open} href='#' title='Adicionar' onClick_prevent_stop={() => reseller.openForm()}>Adicionar</a>
      </Show>
    </header>

    <Show if={reseller.form}>
      <form className={style.reseller__form} onSubmit_prevent_stop={() => reseller.onSubmit()}>
        <input
          className={style.reseller__code}
          type='text'
          id='code'
          name='code'
          placeholder='digite o código'
          onChange_prevent_stop={(event) => reseller.onChange(event.target)}
        />
        <input className={style.reseller__send} type='submit' value='Adicionar' />

        <Show if={reseller.error}>
          <span className={style.reseller__error}>Ops! Não identificamos o código da consultora informado. Verifique o código correto com a consultora.</span>
        </Show>
      </form>
    </Show>

    <Show if={reseller.success}>
      <p className={style.reseller__success}>
        <span>
          consultora C&A <strong className={style.reseller__destak}>{reseller.name}</strong>
        </span>
        <a className={style.reseller__close} href='#' title='Excluir' onClick_prevent_stop={() => reseller.openForm()}>Excluir</a>
      </p>
    </Show>
  </section>
