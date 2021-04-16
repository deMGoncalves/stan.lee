import { paint, repaint } from '@cea/h'
import * as f from '@cea/f'
import component from './component'
import Service from './service'

const getUser = f.magic('getUser')
const user = f.magic('user')
const validate = f.magic('validate')
@paint(component)
class Login {
  #data

  get data () {
    return this.#data
  }

  constructor () {
    this[getUser]()

    console.log(this.#data)
  }

  async [getUser] () {
    const response = await Service.user
    this[user](response)
  }

  [validate] (service) {
    return f.has('token', service) && service
  }

  @repaint
  [user] (service) {
    this.#data = this[validate](service)
    return this
  }
}

export default Login
