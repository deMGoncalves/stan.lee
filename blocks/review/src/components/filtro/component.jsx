import h from '@cea/h'
import { P, H2, Dropdown } from '@cea/review/src/uikit'
import style from './style.css'

export default (filtro) =>
  <div className={style.filtro}>
    <H2 className={style.titulo} size='body' color='black'>avaliação {filtro.criterio}</H2>
    <div className={style.filtragem}>
      <P className={style.texto} size='xSmall' color='blackLight'>ordernar por:</P>
      <div className={style.dropdown}>
        <Dropdown className={style.dropdown__select}
          onChange={(e) => filtro.por(e)}
          options={[['mais recente|', 'mais recentes'],
            ['positiva|&amp;positive=true', 'positivo'],
            ['negativa|&amp;negative=true', 'negativo']]}
        />
      </div>
    </div>
  </div>