import * as f from '@cea/f'
const payload = Symbol('payload')
const tokens = Symbol('tokens')
const cookie = Symbol('cookie')

const URL = 'https://ecommerce.cea.com.br/logged/token/'

class Service {
  static get user () {
    return fetch(URL, Service[payload](Service[tokens]()))
      .then((response) => response.json())
      .catch(error => console.log(`[Stan Lee] Pixel / Mega Header / user: ${error}`))
  }

  static [cookie] (key) {
    return f.prop('[2]', document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`))
  }

  static [payload] (tokens) {
    return {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(tokens)
    }
  }

  static [tokens] () {
    return {
      vtex_token_cea: this[cookie]('VtexIdclientAutCookie_ioba60bb38-caea-485b-81e0-0d7b75a95e21'),
      vtex_token_id: this[cookie]('VtexIdclientAutCookie_iocea')
    }
  }
}

export default Service
