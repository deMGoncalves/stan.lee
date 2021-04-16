import * as f from '@cea/f'

const accountId = f.always('08522b4b')
const host = f.always('https://www.apolloup.com.br/alto')

export default {
  accountId,
  host,

  getUser (utm) {
    if (f.not(utm)) {
      return new Promise(resolve => resolve(null))
    }

    return fetch(`${host()}/promotores/${accountId()}/${utm}`)
      .then(response => response.json())
      .then(users => users.shift())
      .catch(error => console.log(`[Stan Lee] Pixel / Mega Header / getUser: ${error}`))
  },

  async getUTM () {
    return new Promise((resolve) => {
      if ('vtexjs' in window) {
        vtexjs
          .checkout
          .getOrderForm()
          .then((orderForm) =>
            /^ApolloUp$/i.test(f.prop('marketingData.utmSource', orderForm))
              ? f.prop('marketingData.utmCampaign', orderForm)
              : ''
          )
          .then(resolve)
        return
      }

      resolve('')
    })
  }
}
