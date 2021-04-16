import * as f from '@cea/f'
import filterStyles from './filterStyles'
import mapStyles from './mapStyles'
import joinStyles from './joinStyles'


export default (flagStyles) => {

  const stylesDesktop = {
    'border-radius': '4px',
    'background-color': f.prop('[2]', flagStyles),
    'background-image': f.prop('[4]', flagStyles) && `url(${f.prop('[4]', flagStyles)})`,
    'display': 'block',
    'font-size': '0',
  }

  const stylesMobile = {
    'background-image': f.prop('[5]', flagStyles) && `url(${f.prop('[5]', flagStyles)})`,
  }

  const stylesBefore = {
    'color':  f.prop('[3]', flagStyles),
    'content': `'${f.prop('[1]', flagStyles)}'`,
    'display': 'inline-block',
    'font-weight': 'normal',
    'font-size': '13px',
    'line-height': '30px',
  }

  return {
    'before': joinStyles(mapStyles(filterStyles(stylesBefore))),
    'stylesDesktop': joinStyles(mapStyles(filterStyles(stylesDesktop))),
    'stylesMobile': joinStyles(mapStyles(filterStyles(stylesMobile)))
  }
}