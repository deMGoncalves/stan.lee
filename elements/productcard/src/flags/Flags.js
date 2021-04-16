import { paint } from '@cea/h'
import * as f from '@cea/f'
import Component from './component'

import slugString from './slugString'


@paint(Component)
class Flags {

  #clusterHighlights

  constructor (props) {
    this.#clusterHighlights = f.prop('clusterHighlights', props)
  }

  slugClusterHighlights () {
    return f.map(f.entries(this.#clusterHighlights), (e=>`<div class="flag ${slugString(e[1])}">${slugString(e[1])}</div>`)).join('')
  }

}
export default Flags
