import h from '@cea/h'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import './style.css'

define('cea-recomendacao', (props) =>
  <Modulo {...props}>
    <div chaordic={props.self.position} />
  </Modulo>
)
