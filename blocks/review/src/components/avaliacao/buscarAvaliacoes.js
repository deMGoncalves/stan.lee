export default async (idProduto, criterio, quantidade) =>
  fetch(`https://api-desktop.cea-ecommerce.com.br/reviews/widget/opinions?code=${idProduto}&store_id=107110&per=${quantidade}&url=http://cea.com.br&order_by=-created_at${criterio}`, {
    headers: {
      'x-api-key': 'nuFa52v3EQ728OxD0YwE11twEZ7NvFsIWFpVd3di'
    }
  }).then((resp) => resp.json())
