[voltar](../README.md)

Stan Lee
========
:star2: `Grandes códigos vem com grandes resposabilidades.` :star2:

## productcard

component de card de produto para vitrine

## chamada do component
Exemplo de uso do component
```bash
    import ProductCard from '@cea/productcard'
    <ProductCard
      clusterHighlights={['id flag na vtex', 'id flag na vtex']}  # flags no produto (coloque do jeito que receber da api, o component irá formatar o nome corretamente) --> array
      hideFlags='true'  # para esconder as flags do card --> string true ou false
      installmentPrice='3317'  # valor da parcela em float ou centavos (o component irá formatar para moeda R$199,00)---> string ou number
      maxInstallment='6' # quantidade máxima de parcelas ---> string ou number
      price='19900' # valor do produto em float ou centavos (o component irá formatar para moeda R$199,00)---> string ou number
      stock= '10' # quantidade do produto em estoque ---> string ou number
      title='Título do produto' # título do produto --> string
      url='https://www.cea.com.br/url-produto' # url do produto --> string
      urlImagesArray = {[
      {
        desktop: 'https://cea.vteximg.com.br/arquivos/ids/imagem1-desktop.jpg',
        mobile: 'https://cea.vteximg.com.br/arquivos/ids/imagem1-mobile.jpg',
        tablet: 'https://cea.vteximg.com.br/arquivos/ids/imagem1-tablet.jpg'
      },
      {
        desktop: 'https://cea.vteximg.com.br/arquivos/ids/imagem2-desktop.jpg',
        mobile: 'https://cea.vteximg.com.br/arquivos/ids/imagem2-mobile.jpg',
        tablet: 'https://cea.vteximg.com.br/arquivos/ids/imagem2-tablet.jpg'
      }
      ]}# imagens do produto (ideal 2 imagens pelo menos)  --> array de objetos
     
     />
  ```
