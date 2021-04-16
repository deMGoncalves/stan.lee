import h from '@cea/h'
import * as f from '@cea/f'
import Container from '@cea/modulos/src/container'
import define from '@cea/modulos/src/define'
import style from './style.css'

define('back-button', ({ self }) =>
  <section className={style.backButton}>
    <Container>
      <a
        className={style.backButton__link}
        data-collect='internal-navigation'
        data-collect-info={self.utmiCampaign}
        href={f.prop('[1]', self.button)}
        title={f.prop('[0]', self.button)}>
        { f.prop('[0]', self.button) }
      </a>
    </Container>
  </section>
)
