import h from '@cea/h'
import style from './style.css'

export default (sla) =>
  <li className={style.sla} onClick_prevent_stop={() => sla.selecionar(sla.id)}>
    <input className={style.sla__selecao} type='radio' value={sla.modalidade} checked={sla.checked} />
    <label className={style.sla__detalhes} htmlFor='entrega'>
      <div>
        <p className={style.sla__modalidade}>{sla.modalidade}</p>
        <p>{sla.prazo}</p>
      </div>
      <p className={style.sla__preco}>Frete Grátis</p>
    </label>
  </li>