import h, { Hide } from '@cea/h'
import * as f from '@cea/f'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import Img from '@cea/modulos/src/img'
import style from './style.css'

define('service-benefits-inline', (props) => {
  const Benefits = ({ self, n }) =>
    <Hide if={f.isEmpty(self[`bracket${n}Title`][0])}>
      <li className={style.serviceBenefitsInline__li}>
        <div className={style.serviceBenefitsInline__link}>
          <Img className={[style.serviceBenefitsInline__icon, (self[`bracket${n}Link`][0] ? 'cursor' : '')]}
            mobileUrl={self[`bracket${n}ImageUrl`]}
            alt={self[`bracket${n}Title`]}
            onClick={() => f.not(f.isEmpty(self[`bracket${n}Link`][0])) && location.assign(self[`bracket${n}Link`][0])}
          />
          <Hide if={f.isEmpty(self[`bracket${n}Link`][0])}>
            <a className={style.serviceBenefitsInline__text} href={self[`bracket${n}Link`][0]}><strong>{ self[`bracket${n}Title`] }</strong></a>
          </Hide>
          <Hide if={!f.isEmpty(self[`bracket${n}Link`][0])}>
            <p className={style.serviceBenefitsInline__text}><strong>{ self[`bracket${n}Title`] }</strong></p>
          </Hide>
        </div>
      </li>
    </Hide>

  return (
    <Modulo {...props}>
      <ul className={style.serviceBenefitsInline__ul}>
        <Benefits {...props} n='One' />
        <Benefits {...props} n='Two' />
        <Benefits {...props} n='Three' />
        <Benefits {...props} n='Four' />
      </ul>
    </Modulo>
  )
})
