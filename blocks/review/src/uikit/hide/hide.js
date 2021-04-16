export default (props, children) =>
  !props.if ? children : document.createComment('')
