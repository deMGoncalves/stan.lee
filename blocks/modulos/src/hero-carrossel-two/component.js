import h from '@cea/h'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import BracketList from '@cea/modulos/src/bracketList'

define('hero-carrossel-two', (props) =>
  <Modulo {...props}>
    <BracketList {...props} noLink column='oneToTwo' />
  </Modulo>
)
