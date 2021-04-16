import h from '@cea/h'
import price from './price'
import style from './style.css'

export default function (produtoResumido) {
  const value = price(produtoResumido.valor)

  return (
    <li className={style.products__card} onClick={() => location.assign(produtoResumido.link)}>
      <img className={style.products__thumbnail} src={produtoResumido.image} alt={produtoResumido.meta} />
      <a className={style.products__name} href={produtoResumido.link}>{produtoResumido.name}</a>
      <data className={style.products__price} value={value}>{value}</data>
    </li>
  )
}
