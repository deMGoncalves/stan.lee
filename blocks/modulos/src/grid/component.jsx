import h from '@cea/h'
import BracketGrid from '@cea/modulos/src/bracketGrid'
import style from './style.css'

const columns = {
  One: ['One'],
  Two: ['One', 'Two'],
  Three: ['One', 'Two', 'Three'],
  Four: ['One', 'Two', 'Three', 'Four'],
  Five: ['One', 'Two', 'Three', 'Four', 'Five']
}

const grids = {
  Two: "WithTwo",
  Three: "WithThree",
  Four: "WithFour",
  Five: "WithFive"
}

export default (props) =>
  <div className={[style.grid, style[props.matriz], style[grids[props.matriz]], props.className]}>
    { columns[props.matriz].map((n) => <BracketGrid {...props} n={n} />) }
  </div>
