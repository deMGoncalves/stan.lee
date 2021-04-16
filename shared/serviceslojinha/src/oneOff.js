import * as f from '@cea/f'
import { oneOff } from './structs'

export default {
  apolloup: oneOff('08522b4b', 'https://www.apolloup.com.br/alto', 'promotores', 'product'),
  mais: oneOff(f.__, 'https://apicea.mais.com.br/api/MinhaCea', 'FindDataByDomain', 'FindProductsStoreByDomain')
}
