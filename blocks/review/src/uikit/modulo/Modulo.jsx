import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import Container from '../container'
import Title from '../title'
import style from './style.css'

export default (props, children) =>
  <section className={style.modulo}>
    <Container>
      <Hide if={ f.isEmpty(props) }>
        <Title {...props} />
      </Hide>
      { children }
    </Container>
  </section>
