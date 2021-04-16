import TopBarProduct from './TopBarProduct'
// jest.mock('./TopBarProduct')

describe('Módulo Top Bar', function () {
  beforeEach(function () {
    jest.clearAllMocks();
  })

  //vars de entrada
  const mockModuleData = {
    collections: [
      {
        0: '1234',
        1: 'Ative o desconto progressivo* utilizando o cupom Black Friday',
        2: 'https://www.cea.com.br/',
        3: '#000',
        4: 'https://cea.vteximg.com.br/arquivos/bg-top-bar-teste.png',
        5: '#fff',
      },
    ],
    outProductPage: 'yes',
    toggle: 'hidden',
  }

  const mockProductData = {
    1234: 'id-flag-1234',
    4321: 'id-flag-4321',
  }

  //vars de saída
  const collectionsOnModule = [
    ...mockModuleData.collections
  ]

  const collectionActive = {
    0: '1234',
    1: 'Ative o desconto progressivo* utilizando o cupom Black Friday',
    2: 'https://www.cea.com.br/',
    3: '#000',
    4: 'https://cea.vteximg.com.br/arquivos/bg-top-bar-teste.png',
    5: '#fff',
  }

  const expectedStyles = `background-color:${collectionActive[3]}; background-image:url(${collectionActive[4]}); color:${collectionActive[5]}; cursor:${collectionActive[2] ? 'pointer' : 'default'}`

  const topBar = new TopBarProduct(mockModuleData, mockProductData)

  //testes
  test('Ao verificar se a classe está instanciada deve retornar que ainda não está definida', function () {
    expect(TopBarProduct).toBeDefined()
  })


  test('Ao verificar se o módulo está com a opção "out-product-page" ativada deve retornar True', () => {
    expect(topBar.outProductPage).toBe(true);
  })

  test('Ao verificar se há alguma coleção ativa na PDP que combina com alguma do módulo deve retornar o objeto da coleção que combina', () => {
    expect(topBar.activeCollection).toEqual(collectionActive);
  })

  test('Ao verificar coleções ativas no módulo deve retornar um objeto de coleções', () => {
    expect(topBar.collectionsOnModule).toEqual(collectionsOnModule);
  })

  test('Ao verificar coleções ativas na PDP deve retornar um objeto de coleções', () => {
    expect(topBar.collectionsOnProduct).toEqual(mockProductData);
  })

  test('Ao verificar estilos que serão aplicados inline retona uma string com todos os estilos', () => {
    expect(topBar.textStyles).toEqual(expectedStyles);
  })


  test('Ao verificar se o módulo está oculto ou não retorna True', () => {
    expect(topBar.hideModule).toBe(true);
  })
})
