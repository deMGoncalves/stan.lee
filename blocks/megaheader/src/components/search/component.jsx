import h from '@cea/h'
import style from './style.css'
import Icon from '@cea/icon'

export default (search) =>
  <form className={[style.search, search.className]} action={search.action}>
    <label className={style.search__label} htmlFor='q'>{search.label}</label>
    <input className={style.search__input} name={search.name} id='q' type='search' autoComplete='off' placeholder={search.label} />
    <button className={style.search__button} type='submit'>
      <Icon.Search small />
    </button>
  </form>
