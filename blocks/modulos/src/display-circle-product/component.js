import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import define from '@cea/modulos/src/define'
import Metro from '@cea/modulos/src/metro'
import Modulo from '@cea/modulos/src/modulo'
import Queridinha from '@cea/modulos/src/queridinha'
import style from './style.css'

define('display-circle-product', props =>
  <Modulo {...props} className={style.displayCircleProduct}>
    <Hide if={f.isEmpty(props.self.products)}>
      <Metro columns='6'>
        {
          props.self.products.map(([imageUrl, name, price, linkUrl, alt]) =>
            <Queridinha
              utmiCampaign={props.utmiCampaign}
              imageUrl={imageUrl}
              name={name}
              type='product'
              price={price}
              linkUrl={linkUrl}
              alt={alt}
            />
          )
        }
      </Metro>
    </Hide>
  </Modulo>
)
