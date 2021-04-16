import h from '@cea/h'
import Container from '@cea/modulos/src/container'
import define from '@cea/modulos/src/define'
import style from './style.css'

define('title-departament', ({ self }) =>
  <section className={style.titleDepartament}>
    <Container>
      <h1 className={style.titleDepartament__title}>{ self.title }</h1>
    </Container>
  </section>
)
