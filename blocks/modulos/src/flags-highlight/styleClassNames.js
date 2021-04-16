import * as f from '@cea/f';
import filterStyles from './filterStyles'
import compareDates from './compareDates'

export default (flagData) => {

  const activeByDate = compareDates(f.prop('[7]', flagData), f.prop('[8]', flagData))
  const showOnPDP = activeByDate && f.or(f.prop('[6]', flagData) == 'show_all', f.prop('[6]', flagData) == 'show_pdp')
  const showOnVitrine = activeByDate && f.or(f.prop('[6]', flagData) == 'show_all', f.prop('[6]', flagData) == 'vitrine')

  const className = {
    'pdp': showOnPDP && `.product-flags .flag.${f.toLower(f.prop('[0]', flagData))}`,
    'vitrine': showOnVitrine && `html .res-prateleira-vitrine-v3 .product-flag-discount .flag.${f.toLower(f.prop('[0]', flagData))}`
  }

  const mapClasses = f.map(filterStyles(className), className => f.prop('[1]', className))
  const mapClassesBefore = f.map(filterStyles(className), className => `${f.prop('[1]', className)}::before`)
  const joinClasses = f.join(mapClasses, ', ')
  const joinClassesBefore = f.join(mapClassesBefore, ', ')

  return {
    'className': joinClasses,
    'classNameBefore': joinClassesBefore
  }
}