import h from '@cea/h'
import style from './style.css'
import img from './image-not-found.png'

const imageUrl = (image) => image || img

export default ({ data }) =>
  <div className={style.brand}>
    <p className={style.brand__heading}>mais buscadas</p>

    {data.map((item) =>
      <a className={style.brand__url} href={item.url} title={item.name}>
        <picture className={style.brand__picture}>
          <source srcSet={imageUrl(item.image)} />
          <img className={style.brand__image} loading='lazy' src={imageUrl(item.image)} alt={item.name} />
        </picture>
      </a>
    ).slice(0, 10)}
  </div>
