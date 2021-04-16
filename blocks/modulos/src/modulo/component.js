import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import Container from '@cea/modulos/src/container'
import style from './style.css'

export default ({ className, self }, children) =>
  <section className={[style.modulo, className]}>
    <Container>
      <Hide if={f.isEmpty(self.title)}>
        <h2 className={style.modulo__title}>{ self.title}</h2>
      </Hide>
      <Hide if={f.isEmpty(self.subTitle)}>
        <p className={style.modulo__subTitle}>{ self.subTitle }</p>
      </Hide>
      { children }
      <Hide if={f.isEmpty(self.text)}>
        <p className={style.modulo__text}>{ self.text }</p>
      </Hide>
      <Hide if={f.isEmpty(self.moreLink)}>
        <a
          className={style.modulo__moreLink}
          href={self.moreLink[1]}
          title={self.moreLink[0]}
        >
          { self.moreLink[0] }
        </a>
      </Hide>
    </Container>
  </section>
