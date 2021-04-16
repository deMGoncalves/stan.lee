import h from '@cea/h'
import style from './style.css'

export default (props) =>
  <picture className={[style.picture, style[props.className]]}>
    {console.log(props)}
    <source className={style.picture__source} srcSet={props.url} />
    <img className={style.picture__image} src={props.url} loading='lazy' alt={props.name} />
  </picture>
