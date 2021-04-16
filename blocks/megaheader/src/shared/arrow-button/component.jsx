import h from '@cea/h'
import style from './style.css'
import icon from '@cea/icon'

export default (link) =>
  <a
    className={[style.link, style[link.className]]}
    href={link.url}
    title={link.name}
    data-link={link.data}
    onClick_prevent={() => link.click()}
  >
    {link.name}
    <icon.ArrowRight small />
  </a>
