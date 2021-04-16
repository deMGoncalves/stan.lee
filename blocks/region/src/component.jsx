import h from '@cea/h'
import style from './style.css'

export default (region) =>
  <article className={style.tamanhos}>
    <section>
      <h3><strong>tamanho </strong></h3>
      <ul className={style.tamanhos__numeracao}>{region.skus}</ul>
    </section>

    <section>
      <h3>Retirada & entrega</h3>
      {region.naLoja}
      {region.emCasa}
    </section>

    <section>
      {region.resumo}
    </section>
  </article>
