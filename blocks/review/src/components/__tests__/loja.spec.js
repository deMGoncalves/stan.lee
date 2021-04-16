import Nota from '../nota'
import Estrela from '../estrela'
import Quantidade from '../quantidade'
import Loja from '../loja'

describe('Loja', () => {
  const nota = new Nota(4.3)
  const estrela = new Estrela(nota)
  const quantidade = new Quantidade(120)
  const loja = new Loja(nota, estrela, quantidade)

  test('Deve retornar um erro quando criar um loja sem uma nota', () => {
    const expression = () => (new Loja())
    const error = new Error('Para criar um Loja é preciso passar uma nota')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar 4.3 quando acessar a propriedade nota', () => {
    expect(loja.nota).toBe(4.3)
  })

  test('Deve retornar um erro quando criar um loja sem estrela', () => {
    const expression = () => (new Loja(nota))
    const error = new Error('Para criar um Loja é preciso passar uma estrela')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar ★★★★☆ quando acessar a propriedade estrela', () => {
    expect(loja.estrela).toBe('★★★★☆')
  })

  test('Deve retornar um erro quando criar um loja sem uma quantidade', () => {
    const expression = () => (new Loja(nota, estrela))
    const error = new Error('Para criar um Loja é preciso passar uma quantiade')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar 120 quando acessar a propriedade estrela', () => {
    expect(loja.quantidade).toBe(120)
  })
})
