import * as f from '@cea/f'
import extendAttributes from '@cea/h/src/extendAttributes'
import appendChildren from './appendChildren'

export default (tagName, props, children) =>
  f.compose(appendChildren(children), extendAttributes(props))(document.createElement(tagName, { is: props.is }))
