import * as f from '@cea/f'

export default function (texto) {
  if (f.not(f.is(String, texto))) {
    throw new Error('Para criar um Comentario precisa passar um texto do tipo String')
  }
}