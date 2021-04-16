import h from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

export default (breadcrumb) =>
  <header className={[style.breadcrumb, breadcrumb.className]} onClick={() => breadcrumb.click()}>
    {f.map(breadcrumb.collection, (crumb) =>
      <span className={style.breadcrumb__path}>{crumb}</span>
    )}
  </header>
