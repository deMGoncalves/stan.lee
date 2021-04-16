export default () =>
  'vtexjs' in window ? vtexjs.checkout.getOrderForm() : Promise.resolve({})
