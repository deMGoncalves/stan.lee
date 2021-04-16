import * as f from '@cea/f'

const zero = (nota) => f.and(f.gte(nota, 0), f.lte(nota, 0.9))
const um = (nota) => f.and(f.gte(nota, 1), f.lte(nota, 1.9))
const dois = (nota) => f.and(f.gte(nota, 2), f.lte(nota, 2.9))
const tres = (nota) => f.and(f.gte(nota, 3), f.lte(nota, 3.9))
const quatro = (nota) => f.and(f.gte(nota, 4), f.lte(nota, 4.9))
const cinco = f.equal(5)

export default f.cond(
  [zero, f.always('☆☆☆☆☆')],
  [um, f.always('★☆☆☆☆')],
  [dois, f.always('★★☆☆☆')],
  [tres, f.always('★★★☆☆')],
  [quatro, f.always('★★★★☆')],
  [cinco, f.always('★★★★★')]
)
