import h from '@cea/h'
import define from '@cea/modulos/src/define'
import HalfBanner from '@cea/modulos/src/halfBanner'
import Modulo from '@cea/modulos/src/modulo'

define('highlight-half-banner', (props) =>
  <Modulo {...props}>
    <HalfBanner {...props} />
  </Modulo>
)
