import h from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

export default (props, children) =>
  <picture {...props} className={[style.picture, props.className]}>
    {children}
    <img className={style.picture__img} loading='lazy' alt={f.or(props.alt, 'C&A Loja Online - Moda, Roupas, Celulares e Calçados')} />
  </picture>
