import h, { Show } from '@cea/h'
import style from './style.css'

export default (topBarAlert) =>
  <section className={[style.topBarAlert, style[topBarAlert.status], topBarAlert.className]} onClick_stop={() => topBarAlert.redirect()}>
    <Show if={topBarAlert.text}>
      <div className={style.topBarAlert__container}>
        <p className={style.topBarAlert__p}>{topBarAlert.text}</p>
        <button className={style.topBarAlert__button} onClick_stop={() => topBarAlert.close()}>X</button>
      </div>
    </Show>
  </section>
