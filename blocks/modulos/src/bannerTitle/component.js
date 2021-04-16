import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

export default ({ self, className }) =>
  <Hide if={f.isEmpty(self.bannerTitle)}>
    <p className={[style.bannerTitle, style[self.colorTransform], className]}>{self.bannerTitle}</p>
  </Hide>
