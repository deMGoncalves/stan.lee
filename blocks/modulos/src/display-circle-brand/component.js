import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import Metro from '@cea/modulos/src/metro'
import Queridinha from '@cea/modulos/src/queridinha'
import style from './style.css'

define('display-circle-brand', props =>
  <Modulo {...props} className={style.displayCircleBrand}>
    <Hide if={f.isEmpty(props.self.brands)}>
      <Metro columns='6'>
        {
          props.self.brands.map(([imageUrl, name, linkUrl, alt]) =>
            <Queridinha
              utmiCampaign={props.utmiCampaign}
              imageUrl={imageUrl}
              name={name}
              linkUrl={linkUrl}
              alt={alt}
            />
          )
        }
      </Metro>
    </Hide>
  </Modulo>
)
