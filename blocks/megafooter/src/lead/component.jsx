import h from '@cea/h'
import style from './style.css'

export default lead =>
  <div className={style.lead}>
    {lead.status}
  </div>
