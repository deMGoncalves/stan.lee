import h from '@cea/h'
import style from './style.css'

export default ({ data }) =>
  <div className={style.size}>
    <p className={style.size__heading}>navegue por tamanho</p>
    {data.map((item) =>
      <a href={item.url} className={style.size__url} title={item.name}>{item.name}</a>
    ).slice(0, 16)}
  </div>
