import h, { Fragment } from '@cea/h'
import { Picture } from '@components'

import style from './style.css'

export default (props) =>
  <Fragment>
    {console.log('Props --> ', props)}

    <header className={style.product__header}>
      <h3 className={style.product__name}>Calça Jeans Feminina Mom Pants Azul Médio 40</h3>
      <Picture
        className='product__picture'
        url='//cea.vteximg.com.br/arquivos/ids/15006865-200-240/Blazer-Masculino-Em-Piquet-Com-Botoes-Manga-Longa-Azul-Marinho-9782921-Azul_Marinho_1.jpg'
        name='Terno Azul'
      />

      <div className={style.product__information}>
        <p className={style.product__seller}>vendido e entregue por C&amp;A Modas</p>
        <p className={style.product__price}>
          <span className={style.product__priceOld}>R$ 49,99</span>
          <em className={style.product__priceBest}>R$ 79,98</em>
          <span className={style.product__priceDiscount}>R$ 20 mais barato</span>
        </p>
      </div>
    </header>
  </Fragment>
