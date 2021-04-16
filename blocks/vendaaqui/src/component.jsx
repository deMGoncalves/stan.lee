import h, { Show, Hide } from '@cea/h'
import style from './style.css'

const dataPdWebforms = 'https://webforms.pipedrive.com/f/1EkHk71dEEREdNzFC3mcz6f32otsZnebfQkLPJD65unnSyB2SkEpE5THdnok5ZJdN'
const srcLoader = 'https://webforms.pipedrive.com/f/loader'

export default (vendaAqui) =>
  <section className={style.vendaAqui}>
    <Hide if={vendaAqui.status}>
      <div className='pipedriveWebForms' data-pd-webforms={dataPdWebforms}>
        <script src={srcLoader} />
      </div>
    </Hide>

    <Show if={vendaAqui.status}>
      <strong className={style.vendaAqui__strong}>Prontinho! Agora deixa com a gente :)</strong>
      <p className={style.vendaAqui__p}>Entraremos em contato o mais breve possível.</p>
    </Show>
  </section>
