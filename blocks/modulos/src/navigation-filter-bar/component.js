import h from '@cea/h'
import ButtonList from '@cea/modulos/src/buttonList'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import style from './style.css'

define('navigation-filter-bar', (props) => {
  const Column = (props) =>
    <div className={style.navigationFilterBar__column}>
      <h3 className={style.navigationFilterBar__title}>
        { props.self[`bracket${props.n}Title`]}
        <p className={style.navigationFilterBar__subtitle}>{ props.self[`bracket${props.n}SubTitle`] }</p>
      </h3>
      <ButtonList {...props} className={style.navigationFilterBar__button} />
    </div>

  return (
    <Modulo {...props}>
      <div className={style.navigationFilterBar__row}>
        <Column {...props} n='One' />
        <Column {...props} n='Two' />
      </div>
    </Modulo>
  )
})
