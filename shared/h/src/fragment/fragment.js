import * as f from '@cea/f'
import appendChildren from '@cea/h/src/h/appendChildren'
import extendAttributes from './extendAttributes'

export default (props, children) =>
  appendChildren(f.flatten(children), extendAttributes(props, document.createDocumentFragment()))
