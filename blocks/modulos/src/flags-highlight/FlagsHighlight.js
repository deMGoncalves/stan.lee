import * as f from '@cea/f'
import generateCompleteCss from './generateCompleteCss'
import styleStaticCommon from './styleStaticCommon'

class FlagsHighlight {

  #flagsOnModule

  get commonVitrineStyles () {
    return  'html .res-prateleira-vitrine-v3 .product-flag-discount .flag{ width: 100% } .n-prateleira-vitrine .product-flags .flag{ display: none }'
  }
    
  get flags () {
    return this.#flagsOnModule
  }

  constructor (props) {
    this.#flagsOnModule = f.prop('collections', props)
  }

  generateCommonFlagStyles () {
    return  `.product-flags .flag, html .res-prateleira-vitrine-v3 .product-flag-discount .flag{ ${styleStaticCommon()} }`
  }

  generateDinamicFlagStyles () {
    return f.map( this.flags, (flagData) => generateCompleteCss(flagData) )
  }

}

export default FlagsHighlight
