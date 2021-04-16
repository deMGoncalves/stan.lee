import Produto from '../produto'
import Recomendacao from '../recomendacao'
import Quantidade from '../quantidade'
import Nota from '../nota'
import Estrela from '../estrela'

describe('Produto', () => {
  const nota = new Nota(3.8)
  const estrela = new Estrela(nota)
  const recomendacao = new Recomendacao(100, 69)
  const quantidade = new Quantidade(369)
  const idProduto = 2162552
  const produto = new Produto(nota, recomendacao, quantidade, estrela, idProduto, [])

  test('Deve retornar um erro quando criar um produto sem uma nota', () => {
    const expression = () => (new Produto())
    const error = new Error('Para criar um Produto é preciso passar uma nota')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar 3.8 quando acessar a propriedade nota', () => {
    expect(produto.nota).toBe(3.8)
  })

  test('Deve retornar um erro quando criar um produto sem uma recomendacao', () => {
    const expression = () => (new Produto(nota))
    const error = new Error('Para criar um Produto é preciso passar uma recomendação')
    expect(expression).toThrowError(error)
  })

  test('Deve retorar 69% quando acessar a propriedade recomendacao', () => {
    expect(produto.recomendacao).toBe('69')
  })

  test('Deve retornar um erro quando criar um produto sem uma quantidade', () => {
    const expression = () => (new Produto(nota, recomendacao))
    const error = new Error('Para criar um Produto é preciso passar uma quantidade')
    expect(expression).toThrowError(error)
  })

  test('Deve retorar 369 quando acessar a propriedade quantidade', () => {
    expect(produto.quantidade).toBe(369)
  })

  test('Deve retornar um erro quando criar um produto sem estrela', () => {
    const expression = () => (new Produto(nota, recomendacao, quantidade))
    const error = new Error('Para criar um Produto é preciso passar estrelas')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar ★★★☆☆ quando acessar a propriedade estrela', () => {
    expect(produto.estrela).toBe('★★★☆☆')
  })

  test('Deve retornar um erro quando criar um produto sem idProduto', () => {
    const expression = () => (new Produto(nota, recomendacao, quantidade, estrela))
    const error = new Error('Para criar um produto é preciso passar um id de produto')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar um erro quando criar um produto sem avaliacoes', () => {
    const expression = () => (new Produto(nota, recomendacao, quantidade, estrela, idProduto))
    const error = new Error('Para criar um Produto é preciso passar avaliações')
    expect(expression).toThrowError(error)
  })

  test('Deve retorar avaliacoes quando acessar a propriedade avaliacoes', () => {
    expect(produto.avaliacoes).toEqual([])
  })
})
