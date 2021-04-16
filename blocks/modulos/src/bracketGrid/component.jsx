import h, { Show } from '@cea/h'
import style from './style.css'
import GridHover from './gridHover'

export default (props) =>
  <a
    title={props.produto.productTitle}
    className={[props.gridData.n, style.gridBlock, style[props.opacity]]}
    style={`
        grid-area: Grid-${props.gridData.n};
        background: url(${props.gridData.self[`${props.gridData.tab}Bracket${props.gridData.n}MobileImageUrl`]}) center center;
        background-size: cover
      `}
    href={props.gridData.self[`${props.gridData.tab}Bracket${props.gridData.n}Link`]}
    onMouseEnter={ev => props.showPrices(ev)}
    onMouseLeave={ev => props.hidePrices(ev)}
    rel='noreferrer'
    target='_blank'
  >
    <div
      id={`${props.gridData.tab}__${props.gridData.n}`}
      dataCollectInfo={self[`${props.gridData.tab}Bracket${props.gridData.n}UtmiCampaign`]}
    >
      <Show if={props.hoveredElement}>
        <GridHover produto={props.produto} />
      </Show>
    </div>
  </a>
