const params = (new URL(document.location)).searchParams

export default async function () {
  return fetch(`https://www.cea.com.br/api/checkout/pub/orders/order-group/${params.get('og')}`)
    .then((res) => res.json())
    .catch(() => [])
}
