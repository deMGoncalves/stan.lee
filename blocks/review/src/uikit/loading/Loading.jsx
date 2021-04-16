import h from '@cea/h'
import style from './style.css'

const component = () =>
  <div className={style.loader}>
    <div className={style.loader_container}>
      <div className={style.loader_block}>
        <div className={style.loader_block_spinner}>
          <i className='ceaicon-e-filled' />
        </div>
      </div>
    </div>
  </div>

export default component
