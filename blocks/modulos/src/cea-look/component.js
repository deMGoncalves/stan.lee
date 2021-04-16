import h from '@cea/h'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import './style.css'

define('cea-look', (props, children) =>
  <Modulo {...props}>
    {children}
  </Modulo>
)
