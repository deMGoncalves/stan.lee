import h from '@cea/h'
import ButtonList from '@cea/modulos/src/buttonList'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import './style.css'

define('navigation-category-buttons', (props) =>
  <Modulo {...props}>
    <ButtonList {...props} />
  </Modulo>
)
