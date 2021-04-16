import h from '@cea/h'
import style from './style.css'

export default () =>
  <section className={[style.lead, style.footer__lead]}>
    <div className={style.form__container}>
      <div className={style.leadSucesso__container}>
        <p className={style.leadSucesso__tudocerto}>tudo certo!</p>
        <p className={style.leadSucesso__campaing__desc}>Seu cadastro foi enviado. Seu desconto será aplicado direto no carrinho, aproveite para utilizar agora mesmo =)</p>
      </div>
    </div>
  </section>
