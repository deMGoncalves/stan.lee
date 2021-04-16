import h, { Show } from '@cea/h'
import * as f from '@cea/f'
import Figure from '@cea/modulos/src/figure'
import style from './style.css'

export default ({ self, className }, children) =>
  <Show if={f.or(self.bannerMobileImageUrl, self.bannerTabletImageUrl, self.bannerDesktopImageUrl)}>
    <Figure
      dataCollectInfo={self.utmiCampaign}
      mobileUrl={self.bannerMobileImageUrl}
      tabletUrl={self.bannerTabletImageUrl}
      desktopUrl={self.bannerDesktopImageUrl}
      alt={self.bannerAlt}
      className={[style.banner, (self.bannerLink ? style.cursor : ''), style[self.bannerHeight], className]}
      onClick={() => f.not(f.isEmpty(self.bannerLink)) && location.assign(self.bannerLink)}
    >
      {children}
    </Figure>
  </Show>
