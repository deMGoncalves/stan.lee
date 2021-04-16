import h from '@cea/h'
import Img from '@cea/megafooter/src/img'
import style from './style.css'

export default ({ target }) =>
  <ul className={style.security__list}>
    {
      target.map(([href, src, title]) =>
        <li className={style.security__item}>
          <a href={href} target='_blank' rel='noreferrer' title={title}>
            <Img mobileUrl={src} alt={title} />
          </a>
        </li>
      )
    }
    <li className={style.security__item}>
      <a id='seloEbit' href='http://www.ebit.com.br/7997' target='_blank' data-noop='redir(this.href);' />
      <script type='text/javascript' id='getSelo' src='https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js?7997' />
    </li>
  </ul>
