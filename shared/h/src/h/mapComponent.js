import * as f from '@cea/f'
import isComponent from './isComponent'

export default f.map(f.__, (nodeOrComponent) =>
  isComponent(nodeOrComponent) ? nodeOrComponent() : nodeOrComponent)
