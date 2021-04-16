import { paint } from '@cea/h'
import component from './component'
import Form from '@cea/megafooter/src/lead/form'

@paint(component)
export default class Sucesso {
  constructor (lead) {
    setTimeout(() => lead.alterarStatus(new Form(lead)), 5000)
    return this
  }
}
