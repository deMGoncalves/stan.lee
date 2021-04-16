import h from '@cea/h'
import BracketList from '@cea/modulos/src/bracketList'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import './style.css'

define('highlight-fourth-banner', (props) =>
  <Modulo {...props}>
    <BracketList {...props} column='twoToFour' />
  </Modulo>
)
