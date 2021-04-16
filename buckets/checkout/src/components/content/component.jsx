import h from '@cea/h'
import style from './style.css'

export default (props, children) =>
  <section className={[style.content, props.className]}>
    {children}
  </section>
