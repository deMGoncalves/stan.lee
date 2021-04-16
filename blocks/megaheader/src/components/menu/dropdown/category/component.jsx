import h, { Show } from '@cea/h'
import style from './style.css'
import * as f from '@cea/f'

import { Banner, Sizes, Brands } from '@cea/megaheader/src/components/menu/dropdown'
import { def, smallBanner, truncate, activeted } from './template-suport'

export default ({ navigation }) =>
  navigation.categorias.map((categoria, index) =>
    <div className={[style.category, def(index, style)]}>
      <a
        className={style.category__link}
        href={categoria.url}
        title={categoria.name}
        onMouseOver_prevent_stop={(event) => activeted(event.target, style)}
      >
        {truncate(categoria.name)}
      </a>

      <ul className={style.category__submenu}>
        <li className={style.category__item}>
          {f.aperture(12, (f.or(f.prop('subcategorias', categoria), []))).map((subcategoria) =>
            <div className={style.category__content}>
              {subcategoria.map((link) =>
                <a
                  className={style.category__sublink}
                  href={link.url}
                >
                  {link.name}
                </a>
              )}
            </div>
          )}
        </li>

        <li className={style.category__suplement}>
          <Show if={f.has('tamanhos', categoria)}>
            <Sizes data={f.or(categoria.tamanhos, [])} />
          </Show>

          <Show if={f.has('marcas', categoria)}>
            <Brands data={f.or(categoria.marcas, [])} />
          </Show>

          <Show if={f.has('banners', categoria)}>
            <Banner data={f.or(categoria.banners, [])} small={smallBanner(categoria)} />
          </Show>
        </li>
      </ul>
    </div>
  ).slice(0, 12)
