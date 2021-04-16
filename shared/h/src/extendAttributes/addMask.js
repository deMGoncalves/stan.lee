import maskInput from '@cea/mask/src/maskInput'

export default (node) =>
  (atribute, value) => { 
    return maskInput(node, value) 
  }
