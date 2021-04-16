import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'

import { FetchUser } from '@cea/serviceslojinha'
import servicesUTM from '@cea/orderform'

const oneOff = Symbol('oneOff')

@paint(component)
class Lojinha {
  #payload

  get className () {
    return this[oneOff].className
  }

  get data () {
    return this.#payload
  }

  constructor (props) {
    this[oneOff] = { ...props }
    this.getOrderForm()
  }

  async [f.magic('api')] (engine = 'mais') {
    this[f.magic('getApi')](await FetchUser(engine))
    return this
  }

  @repaint
  [f.magic('getApi')] (api) {
    this.#payload = api
  }

  async getOrderForm () {
    const { marketingData } = await servicesUTM.find()
    this[f.magic('api')](marketingData.utmSource)
  }
}

export default Lojinha
