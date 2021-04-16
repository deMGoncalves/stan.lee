import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import Banner from '@cea/modulos/src/banner'
import Container from '@cea/modulos/src/container'
import define from '@cea/modulos/src/define'
import style from './style.css'

define('page-post', (props) =>
  <Container {...props}>
    <div className={style.pagePost}>
      <Hide if={f.isEmpty(props.self.title)}>
        <h2 className={style.pagePost__title}>{ props.self.title}</h2>
      </Hide>
      <Banner {...props} />
    </div>
    <Hide if={f.isEmpty(props.self.text)}>
      <p className={style.pagePost__text}>{ props.self.text }</p>
    </Hide>
  </Container>
)
