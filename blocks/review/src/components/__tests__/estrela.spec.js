import Estrela from '../estrela'
import Nota from '../nota'

describe('Estrela', () => {
  test('Deve retornar um erro quando criar uma estrela sem nota', () => {
    const expression = () => (new Estrela())
    const error = new Error('Para criar uma estrela é preciso passar uma nota')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar ☆☆☆☆☆ quando a nota for zero', () => {
    const nota = new Nota(0)
    const estrela = new Estrela(nota)
    expect(estrela.valor).toBe('☆☆☆☆☆')
  })

  test('Deve retornar ☆☆☆☆☆ quando a nota for entre 0.1 ate 0.9', () => {
    const nota = new Nota(0.4)
    const estrela = new Estrela(nota)
    expect(estrela.valor).toBe('☆☆☆☆☆')
  })

  test('Deve retornar ★☆☆☆☆ quando a nota for 1', () => {
    const nota = new Nota(1)
    const estrela = new Estrela(nota)
    expect(estrela.valor).toBe('★☆☆☆☆')
  })

  test('Deve retornar ★☆☆☆☆ quando a nota for entre 1.1 ate 1.9', () => {
    const nota = new Nota(1.7)
    const estrela = new Estrela(nota)
    expect(estrela.valor).toBe('★☆☆☆☆')
  })

  test('Deve retornar ★★☆☆☆ quando a nota for 2', () => {
    const nota = new Nota(2)
    const estrela = new Estrela(nota)
    expect(estrela.valor).toBe('★★☆☆☆')
  })

  test('Deve retornar ★★☆☆☆ quando a nota for entre 2.1 ate 2.9', () => {
    const nota = new Nota(2.1)
    const estrela = new Estrela(nota)
    expect(estrela.valor).toBe('★★☆☆☆')
  })

  test('Deve retornar ★★★☆☆ quando a nota for 3', () => {
    const nota = new Nota(3)
    const estrela = new Estrela(nota)
    expect(estrela.valor).toBe('★★★☆☆')
  })

  test('Deve retornar ★★★☆☆ quando a nota for entre 3.1 ate 3.9', () => {
    const nota = new Nota(3.3)
    const estrela = new Estrela(nota)
    expect(estrela.valor).toBe('★★★☆☆')
  })

  test('Deve retornar ★★★★☆ quando a nota for 4', () => {
    const nota = new Nota(4)
    const estrela = new Estrela(nota)
    expect(estrela.valor).toBe('★★★★☆')
  })

  test('Deve retornar ★★★★☆ quando a nota for entre 4.1 ate 4.9', () => {
    const nota = new Nota(4.8)
    const estrela = new Estrela(nota)
    expect(estrela.valor).toBe('★★★★☆')
  })

  test('Deve retornar ★★★★★ quando a nota for 5', () => {
    const nota = new Nota(5)
    const estrela = new Estrela(nota)
    expect(estrela.valor).toBe('★★★★★')
  })
})
