import h from '@cea/h'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import style from './style.css'

/**
 * TODO: Este modulo deve ser refeito/removido
 */
define('share-buttons', (props) =>
  <Modulo {...props}>
    <div className={style.shareButtons__container}>
      <span className={style.shareButtons__title}>Compartilhe:</span>
      <div className={style.addthis_inline_share_toolbox} />
    </div>
    <script src='https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e667a105af871ca' type='text/javascript' async />
  </Modulo>
)
