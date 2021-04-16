import h from '@cea/h'
import * as s from '@shared/'
import style from './style.css'

export default (department) =>
  <li className={style.department}>
    <s.ArrowButton
      className={department.className}
      name={department.name}
      data='department'
      url={department.url}
      click={() => department.open()}
    />
    {department.categories}
  </li>
