export default async (idDoProduto='', nome='', foto='', url='') => {
  const host = 'https://api-desktop.cea-ecommerce.com.br/reviews/widget/root'
  const api = `${host}?code=${idDoProduto}&url=${url}&name=${nome}&photos_urls[]=${foto}`

  return fetch(api, { headers: { 'x-api-key': 'nuFa52v3EQ728OxD0YwE11twEZ7NvFsIWFpVd3di' } }).then((resp) => resp.json())
}
