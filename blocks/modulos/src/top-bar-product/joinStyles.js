import * as f from '@cea/f'

export default (activeCollection) => {
  const styles = {
    'background-color': f.prop('[3]', activeCollection),
    'background-image': f.prop('[4]', activeCollection) && `url(${f.prop('[4]', activeCollection)})`,
    'color':  f.prop('[5]', activeCollection),
    'cursor': f.prop('[2]', activeCollection) ? 'pointer' : 'default'
  }

  const filterValidStyles = f.filter(f.entries(styles), style => f.notEmpty(style[1]))
  const mapStyles         = f.map(filterValidStyles, style => `${style[0]}:${style[1]}`)
  const joinStyles        = f.join(mapStyles, '; ')

  return joinStyles

}
