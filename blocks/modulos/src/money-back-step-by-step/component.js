import h from '@cea/h'
import Container from '@cea/modulos/src/container'
import define from '@cea/modulos/src/define'
import style from './style.css'

define('money-back-step-by-step', () =>
  <Container>
    <section className={style.barBenefits}>
      <p className={style.barBenefits__subtitle}>tenha liberdade para escolher.</p>
      <h2 className={style.barBenefits__title}>experimente em casa suas peças favoritas</h2>
      <ol className={style.barBenefits__steps}>
        <li className={style.barBenefits__stepOne}>
          <dl>
            <dt className={style.barBenefits__term}>encha sua sacola!</dt>
            <dd className={style.barBenefits__definition}>escolha os produtos que mais gostar aqui no site e finalize a compra normalmente</dd>
          </dl>
        </li>
        <li className={style.barBenefits__stepTwo}>
          <dl>
            <dt className={style.barBenefits__term}>experimente em casa</dt>
            <dd className={style.barBenefits__definition}>teste os produtos no conforto de casa em até 7 dias</dd>
          </dl>
        </li>
        <li className={style.barBenefits__stepThree}>
          <dl>
            <dt className={style.barBenefits__term}>troque ou devolva</dt>
            <dd className={style.barBenefits__definition}>troque seus produtos em qualquer loja ou devolva de graça aqui pelo site!
              <a className={style.barBenefits__link} href='https://atendimentocea.zendesk.com/hc/pt-br/articles/225791328-Como-devolver-um-produto-que-quero-efetuar-a-troca-'>como devolver um produto</a>
            </dd>
          </dl>
        </li>
      </ol>
    </section>
  </Container>
)
