import h, { Show } from '@cea/h'
import * as c from './components'
import style from './style.css'

export default (props) =>
  <section className={style.lojinha}>
    <c.Jumbotron {...props.user} />
    <c.Products collection={props.produtos} />
    <Show if={props.carregaMais}>
      <c.Loader evt={props.evt} if={props.carregaMais} />
    </Show>
  </section>
