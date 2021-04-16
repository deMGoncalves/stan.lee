import h, { Repeat } from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'
import Lista from './Lista'

export default (props) =>
  <section className={[style.glossariomarcas__section, style[props.last]]}>
    <h2 className={style.glossariomarcas__h2}>
      {f.prop('[0].letra', props)}
    </h2>
    <ul className={style.glossariomarcas__ul}>
      <Repeat iterator={props} component={Lista} />
    </ul>
  </section>
