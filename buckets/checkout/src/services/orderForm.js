const URL = 'https://cea.myvtex.com/api/checkout/pub/orderForm/0a51684882d14316874deab17f7d5f04'

class OrderForm {
  static get produtos () {
    return fetch(URL, {
      headers: new Headers({
        'x-vtex-api-appToken': 'VTCZBAFKMWCGGBNKTFPHEAOJIKAYTLZHZQOSXFUGCBPRYQBBKYXBZEFUFSQQZHQAWUGQMVNOLJEDKWLSJYNUNYIVKUNEODGVKPVEKLPOLJQQACJIHXHATVMXLKGSIJZH',
        'x-vtex-api-appKey': 'vtexappkey-cea-JTTFQB',
        'content-type': 'application/json',
        accept: 'application/json'
      }),
      mode: 'no-cors'
    }).then(console.log)
  }
}

export default OrderForm
