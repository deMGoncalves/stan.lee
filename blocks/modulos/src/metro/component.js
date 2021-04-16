import h, { Hide } from '@cea/h'
import style from './style.css'

export default (metro, children) =>
  <div className={style.metro}>
    <div className={style.metro__estacao}>
      <div className={style.metro__trilho}>
        {
          children.map((child) =>
            <div className={[style.metro__vagao, style[`columns-${metro.columns}`]]}>
              {child}
            </div>
          )
        }
      </div>
    </div>
    <div className={[style.metro__controle, style[`columns-${metro.columns}`]]}>
      <Hide if={metro.estaNoComeco}>
        <button className={[style.metro__seta, style.metro__prev]} aria-label='Avançar' onClick={() => metro.goPrev()} >
          <span className={[style.metro__arrow, style.left]} />
        </button>
      </Hide>
      <Hide if={metro.chegouNoFinal}>
        <button className={[style.metro__seta, style.metro__prox]} aria-label='Voltar' onClick={() => metro.goProx()} >
          <span className={[style.metro__arrow, style.right]} />
        </button>
      </Hide>
    </div>
  </div>
