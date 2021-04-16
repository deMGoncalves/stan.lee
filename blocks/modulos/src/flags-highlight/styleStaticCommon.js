import joinStyles from './joinStyles'
import filterStyles from './filterStyles'
import mapStyles from './mapStyles'


export default () => {

  const commonStyle = {
    'align-items': 'center',
    'background-repeat': 'no-repeat',
    'background-size': 'auto',
    'background-position': 'center',
    'border-radius': '4px',
    'display': 'none',
    'float': 'left',
    'height': '30px',
    'justify-content': 'center',
    'margin': '0 5px 5px 0',
    'padding': '0 5px',
    'text-align': 'center',
    'white-space': 'nowrap',
    'width': '45%',
  }
  
  return joinStyles(mapStyles(filterStyles(commonStyle)))
}
