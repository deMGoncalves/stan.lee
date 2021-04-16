import h from '@cea/h'
import Picture from '@cea/picture'
import * as mapper from './mapper'
import style from './style.css'

export default new Proxy({}, {
  get: (_, icon) =>
    (props) =>
      <Picture {...props} className={[style.icon, props.className]}>
        <source srcSet={mapper[icon]} />
      </Picture>
})
