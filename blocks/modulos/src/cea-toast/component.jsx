import h from '@cea/h'
import * as f from '@cea/f'
import Device from '@cea/modulos/src/device'
import style from './style.css'

export default (props) =>
  <Device {...props}>
    <div className={style.toast}>
      <p className={style.toast__title}>Aproveite a C&A ao máximo</p>
      <p className={style.toast__description}>Baixe o app para comprar com mais facilidade e acompanhar seus pedidos.</p>
      <div className={style.toast__buttons}>
        <a
          data-collect='internal-navigation'
          data-collect-info={props.self.utmiCampaign}
          className={[style.button, style.inverse, style.toast__no]}
          onClick={props.onClose}
          title='agora não'>
          agora não
        </a>
        <a
          data-collect='internal-navigation'
          data-collect-info={props.self.utmiCampaign}
          className={[style.button, style.black, style.toast__yes]}
          href={f.prop('[1]', props.self.button)}
          title={f.prop('[0]', props.self.button)}>
          { f.prop('[0]', props.self.button) }
        </a>
      </div>
    </div>
  </Device>
