import h, { Show } from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

export default ({ className, dataCollect, n, self }) =>
  <Show if={f.or(f.isEmpty(self.buttons), f.isEmpty(n))}>
    <nav className={[style.buttonList, className]}>
      {
        (f.isEmpty(n) ? self.buttons : self[`bracket${n}Buttons`]).map(([textContent, href, utmi]) =>
          <a
            data-collect={f.or(dataCollect, 'internal-navigation')}
            data-collect-info={f.or(utmi, self.utmiCampaign)}
            data-collect-navigation={self.category}
            className={[style.buttonList__button, style[self.colorTransform], style[self.buttonsSize]]}
            target={f.or(self.buttonsTarget, '_self')}
            onClick={() => location.assign(href)}
            href={href}
            title={textContent}>
            { textContent }
          </a>
        )
      }
    </nav>
  </Show>
