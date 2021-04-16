import * as f from '@cea/f'

const payload = f.magic('payload')
const tokens = f.magic('tokens')
const cookie = f.magic('cookie')
class Service {
  static get user () {
    const userToken = Service[payload](Service[tokens]())

    return new Promise((resolve) =>
      resolve(
        f.isEmpty(f.prop('body', userToken))
          ? {
            statusCode: 401,
            error: 'Unauthorized',
            message: 'Cookies inválidos ou usuário não autenticado no ambiente da VTEX.'
          }
          : fetch('https://ecommerce.cea.com.br/logged/token/', userToken)
            .then((response) => response.json())
            .catch((error) => console.log(`[Stan Lee] Pixel / Mega Header / user: ${error}`))
      )
    )
  }

  static [cookie] (key) {
    return f.prop('[2]', document.cookie.match(`(^|;) ?${key}=([^;]*)(;|$)`))
  }

  static [payload] (tokens) {
    return {
      method: 'POST',
      mode: 'cors',
      body: f.prop('vtex_token_id', tokens) ? JSON.stringify(tokens) : {}
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
