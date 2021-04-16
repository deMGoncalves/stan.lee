import h from '@cea/h'
import style from './style.css'

export default (props) =>
  <li className={style.glossariomarcas__li}>
    <a className={style.glossariomarcas__a} href={`https://busca.cea.com.br/busca/${props.nome}`} title={props.nome}> {props.nome} </a>
  </li>
