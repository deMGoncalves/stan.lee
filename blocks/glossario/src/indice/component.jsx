import h from '@cea/h'
import * as f from '@cea/f'
import schema from '@cea/glossario/src/schema'
import style from './style.css'

export default (indice) =>
  <section className={style.glossario}>
    <div className={style.glossario__container}>
      <nav className={style.glossario__nav}>
        <ol className={style.glossario__ol}>
          {
            f.map(schema, (props) =>
              <li className={[style.glossario__li, style[props.last]]}>
                <a className={[style.glossario__a, style[f.equal(props.char, indice.letra)]]} onClick={() => indice.selecionarLetra(props.char)} title={`glossário letra ${props.char}`}>{props.char}</a>
              </li>
            )
          }
          <li className={style.glossario__todos}>
            <a className={[style.glossario__orientacao, style[f.not(indice.letra)]]} onClick={() => indice.selecionarLetra('')} title='Glossário de marcas'>Todos</a>
          </li>
        </ol>
      </nav>
    </div>
  </section>
