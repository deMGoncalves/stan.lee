import * as f from '@cea/f'
import fragment from '@cea/h/src/fragment'
import parser from './parser'

export default (props, children) =>
  fragment(props, f.flatten(parser(children)))
