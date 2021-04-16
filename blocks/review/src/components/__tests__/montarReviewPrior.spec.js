import Estrela from '../estrela'
import Nota from '../nota'
import Quantidade from '../quantidade'
import MontarReviewPrior from '../montarReviewPrior'

describe('MontarReviewPrior', () => {
  const estrela = new Estrela(new Nota(4.3))
  const quantidade = new Quantidade(120)
  const componenteMontado = new MontarReviewPrior(estrela, quantidade)

  test('Deve retornar um erro quando criar um loja sem estrela', () => {
    const expression = () => (new MontarReviewPrior())
    const error = new Error('Para criar um PriorEvaluation é preciso passar uma estrela')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar ★★★★☆ quando acessar a propriedade estrela', () => {
    expect(componenteMontado.estrela).toBe('★★★★☆')
  })

  test('Deve retornar um erro quando criar um loja sem uma quantidade', () => {
    const expression = () => (new MontarReviewPrior(estrela))
    const error = new Error('Para criar um PriorEvaluation é preciso passar uma quantiade')
    expect(expression).toThrowError(error)
  })

  test('Deve retornar 120 quando acessar a propriedade estrela', () => {
    expect(componenteMontado.quantidade).toBe(120)
  })
})
