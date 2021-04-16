import h from '@cea/h/src/h'
import Fragment from '@cea/h/src/fragment'

export default (props, children) =>
  props.if ? children : <Fragment />
