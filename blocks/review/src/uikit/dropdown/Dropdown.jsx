import h from '@cea/h'
import style from './style.css'

const component = (props) =>
  <div className={style.wrapper__dropdown}>
    <select
      onChange_stop={(e) => props.onChange(e.target.value)}
      className={[
        style.dropdown,
        props.className
      ]}>
      { props.options.map(([key, value]) => <option value={key}>{value}</option>) }
    </select>
  </div>
export default component
