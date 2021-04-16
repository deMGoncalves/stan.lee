import h from '@cea/h'
import BubbleList from '@cea/modulos/src/bubbleList'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import './style.css'

define('display-circle-category', (props) =>
  <Modulo {...props}>
    <BubbleList {...props} />
  </Modulo>
)
