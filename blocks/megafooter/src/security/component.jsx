import h from '@cea/h'
import Quality from './Quality'
import oneOff from '@cea/megafooter/src/oneOff'
import style from './style.css'

export default ({ className }) =>
  <section className={[style.security, className]}>
    <h4 className={style.security__title}>segurança e qualidade</h4>
    <Quality title='segurança e qualidade' target={oneOff.security} />
  </section>
