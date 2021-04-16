import h from '@cea/h'
import style from './style.css'

import icon from '@cea/icon'

export default (link) =>
  <a
    className={[link.className, style.imagelink]}
    href={link.url}
    title={link.name}
  >
    {h(icon[link.icon], { className: style.imagelink__icon, small: true })}
    {link.name}
  </a>
