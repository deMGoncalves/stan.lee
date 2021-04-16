import h from '@cea/h'
import Img from '@cea/megafooter/src/img'
import style from './style.css'

export default  ({ className }) =>
  <section className={[style.bci, className]}>
    <div className={style.bci__container}>
      <Img alt='BCI' className={style.bci__logo} mobileUrl='https://cea.vteximg.com.br/arquivos/footer-ico-logo-bci.png' />
      <p className={style.bci__text}>Desde 2015, a C&A tem orgulho de fazer parte da <a href='http://bettercotton.org/' target='_blank' rel='noreferrer' title='BCI'>Better Cotton Initiative (BCI)</a>. A BCI existe para melhorar a produção global de algodão para as pessoas que produzem, para o ambiente onde ele cresce e para o futuro do setor. Nós temos o compromisso de comprar 100% do nosso algodão como “algodão mais sustentável*” até 2020. O Better Cotton não é fisicamente rastreável até os produtos finais. No entanto, os agricultores que cultivam seu algodão de acordo com os padrões da BCI, se beneficiam da demanda por Better Cotton em volumes equivalentes aos que adquirimos. (*“Algodão mais sustentável” inclui Better Cotton, algodão reciclado e algodão orgânico)</p>
    </div>
  </section>
