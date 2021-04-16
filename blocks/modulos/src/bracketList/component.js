import h from '@cea/h'
import * as f from '@cea/f'
import Bracket from '@cea/modulos/src/bracket'
import style from './style.css'

const columns = {
  oneToTwo: ['One', 'Two'],
  oneToThree: ['One', 'Two', 'Three'],
  oneToFour: ['One', 'Two', 'Three', 'Four'],
  twoToTwo: ['One', 'Two', 'Three', 'Four'],
  twoToFour: ['One', 'Two', 'Three', 'Four'],
  threeToThree: ['One', 'Two', 'Three']
}

export default ({ self, column, noLink }) =>
  <div className={[noLink ? style.bracketListNoLink : style.bracketList, style[column], self.className]}>
    {columns[f.or(column, 'oneToFour')].map((n) => <Bracket self={self} n={n} noLink={noLink} />)}
  </div>
