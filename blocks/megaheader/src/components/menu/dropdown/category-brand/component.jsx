import h from '@cea/h'
import * as f from '@cea/f'
import style from './style.css'

// const caractere = (url) =>
//   f.test(/\?/, url) ? `${url}&` : `${url}?`

export default ({ navigation }) =>
  f.aperture(12, navigation).map((marca) =>
    <div className={style.brand__content}>
      {marca.map((link) =>
        <a
          className={style.brand__link}
          // href={`
          //   ${caractere(link.url)}utmi_campaign=_MEGAHEADER_MARCAS-${f.slugify(f.toUpper(link.name))}
          // `}
          href={link.url}
          title={link.name}
        >
          {link.name}
        </a>
      )}
    </div>
  )
