import Cliente from '../cliente'
import Nota from '../nota'
import Nome from '../nome'
import Estrela from '../estrela'
import Comentario from '../comentario'
import Data from '../data'
import Avaliacao from '../avaliacao'

describe('Avaliacao', () => {
  const nome = new Nome('Mohamad')
  const cliente = new Cliente(nome)
  const nota = new Nota(4.9)
  const estrela = new Estrela(nota)
  const comentario = new Comentario('Este produto eh muito bom')
  const data = new Data('23/09/2019')
  const avaliacao = new Avaliacao(cliente, nota, estrela, comentario, data)

  test('Deve retornar um erro quando criar uma avaliacao sem um cliente', () => {
    const expression = () => (new Avaliacao())
    const error = new Error('Para criar uma Avaliação é preciso passar um cliente')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar "por Mohamad" quando acessar a propriedade cliente', () => {
    expect(avaliacao.cliente).toBe('Mohamad')
  })

  test('Deve retornar um erro quando criar uma avaliacao sem uma nota', () => {
    const expression = () => (new Avaliacao(cliente))
    const error = new Error('Para criar uma Avaliação é preciso passar uma nota')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar 4.9 quando acessar a propriedade nota', () => {
    expect(avaliacao.nota).toBe(4.9)
  })

  test('Deve retornar um erro quando criar uma avaliacao sem uma estrela', () => {
    const expression = () => (new Avaliacao(cliente, nota))
    const error = new Error('Para criar uma Avaliação é preciso passar uma estrela')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar ★★★★☆ quando acessar a propriedade estrela', () => {
    expect(avaliacao.estrela).toBe('★★★★☆')
  })

  test('Deve retornar um erro quando criar uma avaliacao sem um comentario', () => {
    const expression = () => (new Avaliacao(cliente, nota, estrela))
    const error = new Error('Para criar uma Avaliação é preciso passar um comentario')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar "Este produto eh muito bom" quando acessar a propriedade comentario', () => {
    expect(avaliacao.comentario).toBe('Este produto eh muito bom')
  })

  test('Deve retornar um erro quando data não tiver um valor', () => {
    const expression = () => (new Avaliacao(cliente, nota, estrela, comentario))
    const error = new Error('Para criar uma Avaliação é preciso passar uma data')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar "23/09/2019" quando acessar a propriedade data', () => {
    expect(avaliacao.data).toBe('23/09/2019')
  })
})
