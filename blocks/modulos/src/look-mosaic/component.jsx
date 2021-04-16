import h, { Show, Hide } from '@cea/h'
import Img from '@cea/modulos/src/img'
import Container from '@cea/modulos/src/container'
import style from './style.css'

export default ({ self }) =>
  <Container className={style.brothers}>
    <div className={style.brothers__container}>
      <div className={style.brothers__header}>
        <strong className={style.brothers__hashTag}>{self.hashTag}</strong>
        <h2 className={style.brothers__title}>{self.title}</h2>
        <p className={style.brothers__description}>{self.description}</p>
      </div>
      {
        self.looks.map(([thumbnail, url, bubble]) =>
          <div>
            <Show if={bubble}>
              <div className={style.brothers__thumbnail}>
                <Img className={style.brothers__image} mobileUrl={thumbnail} />
                <Img className={style.brothers__bubble} mobileUrl={bubble} />
                <div className={style.brothers__link}>
                  <a className={[style.Button, style.black]} href={url}>compre o look</a>
                </div>
              </div>
            </Show>
            <Hide if={bubble}>
              <div className={style.brothers__thumbnail}>
                <a href={url}>
                  <Img className={style.brothers__image} mobileUrl={thumbnail} />
                </a>
              </div>
            </Hide>
          </div>
        )
      }
    </div>
  </Container>
