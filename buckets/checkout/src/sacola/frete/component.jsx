import h, { Fragment } from '@cea/h'
import { Heading } from '@components'

import style from './style.css'

export default () =>
  <Fragment>
    <Heading title='Calcular entrega' icon />
    <form className={style.frete} action='#'>
      <label className={style.frete__label} htmlFor='txt-cep'>CEP</label>
      <input className={style.frete__input} type='text' id='txt-cep' placeholder='0000-000' />
      <input className={style.frete__button} type='submit' value='Enviar' />
      <a className={style.frete__link} href='#'>Não sei meu CEP</a>
    </form>
  </Fragment>
