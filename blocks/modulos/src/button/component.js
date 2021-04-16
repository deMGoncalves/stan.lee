import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

export default ({ className, self }) =>
  <Hide if={f.isEmpty(self.button)}>
    <a
      data-collect='internal-banner-link'
      data-collect-info={self.utmiCampaign}
      className={[style.button, style[self.colorTransform], className]}
      href={f.prop('[1]', self.button)}
      title={f.prop('[0]', self.button)}
    >
      {f.prop('[0]', self.button)}
    </a>
  </Hide>
