import h from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

export default new Proxy({}, {
  get: (_, tagName) => (props, children) =>
    h('div', {
      ...props,
      className: [
        style.skeleton,
        style[f.toLower(tagName)],
        props.type,
        props.className
      ]
    },
    ...children)
})
