import slot from '@cea/h/src/slot'

export default (component, props, children) =>
  component(props, slot(children))
