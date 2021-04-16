import { paint, repaint } from '@cea/h'
import component from './component'
import Form from './form'

@paint(component)
export default class Lead {
  constructor () {
    this.status = new Form(this)
    return this
  }

  @repaint
  alterarStatus (newStatus) {
    this.status = newStatus
    return this
  }
}
