import h from '@cea/h'
import style from './style.css'

export default (dropdown) => {
  return (
    <nav className={style.dropdown}>
      {dropdown.schema.map((departamento) =>
        <div className={style.dropdown__item}>
          <a
            className={[style.dropdown__department, style[departamento.flag]]}
            href={departamento.url}
          >
            {departamento.name}
          </a>

          {dropdown.mount(departamento)}
        </div>
      )}
    </nav>
  )
}
