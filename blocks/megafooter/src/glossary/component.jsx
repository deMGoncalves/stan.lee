import h from '@cea/h'
import oneOff from '@cea/megafooter/src/oneOff'
import Char from './Char'
import style from './style.css'

export default ({ className }) =>
  <section className={[style.glossary, className]}>
    <div className={style.glossary__container}>
      <h3 className={style.glossary__title}>glossario C&A</h3>
      <nav className={style.glossary__nav}>
        <ol className={style.glossary__list}>
          { oneOff.chars.map(c => <Char value={c} />) }
          <li className={style.glossary__numbers}>
            <a className={style.glossary__ordenation} href={'/glossario/0-9'} title='Glossário de 0 a 9'>0-9</a>
          </li>
        </ol>
      </nav>
    </div>
  </section>
