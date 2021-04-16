import * as f from '@cea/f';
import styleClassNames from './styleClassNames'
import styleDinamic from './styleDinamic'

export default (flagData) => {

  const styleClassName = styleClassNames(flagData)
  const stylesProperties = styleDinamic(flagData)

  const styleDesktop = f.prop('className', styleClassName) 
    && `${f.prop('className', styleClassName)}{ ${f.prop('stylesDesktop', stylesProperties)} }`
  
  const styleDesktopBefore = f.prop('classNameBefore', styleClassName) 
    && `${f.prop('classNameBefore', styleClassName)}{ ${f.prop('before', stylesProperties)} }`

  const StyleMobile = f.prop('className', styleClassName) 
    && f.prop('stylesMobile', stylesProperties) 
    && `@media only screen and (max-width: 768px) { ${f.prop('className', styleClassName)}{ ${f.prop('stylesMobile', stylesProperties)} 
    }
  }`

  return styleDesktop + styleDesktopBefore + StyleMobile
}