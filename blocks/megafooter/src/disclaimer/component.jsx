import h, { Raw, Show } from '@cea/h'
import style from './style.css'

export default function Disclaimer (disclaimer) {
  return (
    <section className={[style.disclaimer, disclaimer.className]}>
      <div className={style.disclaimer__container}>
        <Show if={disclaimer.textDisclaimer}>
          <p className={style.disclaimer__text}>
            <Raw>
              {disclaimer.textDisclaimer}
            </Raw>
          </p>
        </Show>
      </div>
    </section>
  )
}
