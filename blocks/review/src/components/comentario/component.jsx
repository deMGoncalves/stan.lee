import h from '@cea/h'
import style from './style.css'
import { P } from '@cea/review/src/uikit'

export default (comentario) =>
  <P className={style.comentario} size='xSmall' color='black'>{ comentario.texto }</P>
