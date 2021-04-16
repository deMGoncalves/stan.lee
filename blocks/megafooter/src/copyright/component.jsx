import h from '@cea/h'
import style from './style.css'

export default ({ className }) =>
  <section className={[style.copyright, className]}>
    <div className={style.copyright__container}>
      <p className={style.copyright__text}>Copyright Notice: © C&amp;A e suas entidades relacionadas. Todos os direitos reservados. <a href='https://www.cea.com.br/politica-de-privacidade' target='_blank' rel='noreferrer' title='Conheça nossa política de privacidade'>Conheça nossa Política de Privacidade</a>. C&amp;A Modas Ltda. <strong>Fale conosco pelo e-mail <a href='mailto:faleconosco@e.cea.com.br'>faleconosco@e.cea.com.br</a></strong> - Alameda Araguaia, 1222, Alphaville – Barueri – SP Cep: 06455-000 CNPJ 45.242.914/0001-05</p>
    </div>
  </section>
