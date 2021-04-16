import h from '@cea/h'
import style from './style.css'


export default (props) => (
  <picture className={[style.picture, props.className]}>
    <source srcSet={props.imageMobile} media='(max-width: 767px)' />
    <source srcSet={props.imageTablet} media='(min-width: 768px) and (max-width: 959px)' />
    <source srcSet={props.imageDesktop} media='(min-width: 960px)' />
    <img className={[style.picture__image]}  loading='lazy' width='1000' height='1200' alt={props.altImage} />
  </picture>
)
