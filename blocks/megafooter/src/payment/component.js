import h from '@cea/h'
import Img from '@cea/megafooter/src/img'
import style from './style.css'

export default ({ className }) =>
  <section className={[style.payment, className]}>
    <h3 className={style.payment__title}>formas de pagamento</h3>
    <ul className={style.payment__list}>
      <li className={style.payment__item}><Img className={style.payment__visa} mobileUrl='https://cea.vteximg.com.br/arquivos/footer-ico-visa.png' /></li>
      <li className={style.payment__item}><Img className={style.payment__mastercard} mobileUrl='https://cea.vteximg.com.br/arquivos/footer-ico-mastercard.png' /></li>
      <li className={style.payment__item}><Img className={style.payment__dinners} mobileUrl='https://cea.vteximg.com.br/arquivos/footer-ico-dinners.png' /></li>
      <li className={style.payment__item}><Img className={style.payment__hipercard} mobileUrl='https://cea.vteximg.com.br/arquivos/footer-ico-hipercard.png' /></li>
      <li className={style.payment__item}><Img className={style.payment__elo} mobileUrl='https://cea.vteximg.com.br/arquivos/footer-ico-elo.png' /></li>
      <li className={style.payment__item}><Img className={style.payment__cartaocea} mobileUrl='https://cea.vteximg.com.br/arquivos/footer-ico-cartao-cea.png' /></li>
      <li className={style.payment__item}><Img className={style.payment__cartaopresente} mobileUrl='https://cea.vteximg.com.br/arquivos/footer-ico-cartao-presente.png' /></li>
      <li className={style.payment__item}><Img className={style.payment__boleto} mobileUrl='https://cea.vteximg.com.br/arquivos/footer-ico-boleto.png' /></li>
    </ul>
  </section>
