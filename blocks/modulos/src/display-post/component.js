import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import Metro from '@cea/modulos/src/metro'
import Post from '@cea/modulos/src/post'
import style from './style.css'

define('display-post', props =>
  <Modulo {...props} className={style.displayPost}>
    <Hide if={f.isEmpty(props.self.posts)}>
      <Metro columns='6'>
        {
          props.self.posts.map(([imageUrl, name, linkUrl, titleUrl, alt]) =>
            <Post
              utmiCampaign={props.utmiCampaign}
              imageUrl={imageUrl}
              name={name}
              linkUrl={linkUrl}
              titleUrl={titleUrl}
              alt={alt}
            />
          )
        }
      </Metro>
    </Hide>
  </Modulo>
)
