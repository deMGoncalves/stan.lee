import h from '@cea/h'
import style from './style.css'

export default ({ value }) =>
  <li className={style.glossary__alphabet}>
    <a className={style.glossary__letter} href={`https://www.cea.com.br/glossario/${value}`} title={`Glossário Letra ${value}`}>{value}</a>
  </li>
