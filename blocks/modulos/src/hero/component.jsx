import h from '@cea/h'
import Container from '@cea/modulos/src/container'
import style from './style.css'

export default ({ self }, children) =>
  <section className={style.hero} style={`background: ${self.backgroundColor};`}>
    <Container>
      { children }
    </Container>
  </section>
