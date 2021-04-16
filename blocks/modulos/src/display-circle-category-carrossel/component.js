import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import Bubble from '@cea/modulos/src/bubble'
import define from '@cea/modulos/src/define'
import Metro from '@cea/modulos/src/metro'
import Modulo from '@cea/modulos/src/modulo'
import './style.css'

define('display-circle-category-carrossel', (props) =>
  <Modulo {...props}>
    <Hide if={f.isEmpty(props.self.categories)}>
      <Metro columns='8'>
        {
          props.self.categories.map(([imageSrc, categoryName, linkUrl, alt]) =>
            <Bubble
              utmiCampaign={props.utmiCampaign}
              imageSrc={imageSrc}
              categoryName={categoryName}
              linkUrl={linkUrl}
              alt={alt}
            />
          )
        }
      </Metro>
    </Hide>
  </Modulo>
)
