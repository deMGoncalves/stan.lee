import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import Bubble from '@cea/modulos/src/bubble'
import style from './style.css'

export default ({ self, utmiCampaign }) =>
  <Hide if={f.isEmpty(self.categories)}>
    <div className={style.bubbleList}>
      {
        self.categories.map(([imageSrc, categoryName, linkUrl, alt, status, tooltip]) =>
          <Bubble
            utmiCampaign={utmiCampaign}
            imageSrc={imageSrc}
            categoryName={categoryName}
            status={status}
            tooltip={tooltip}
            linkUrl={linkUrl}
            alt={alt}
          />
        )
      }
    </div>
  </Hide>
