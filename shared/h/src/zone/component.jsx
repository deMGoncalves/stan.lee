import h from '@cea/h/src/h'
import Hide from '@cea/h/src/hide'

export default (zone, children) =>
  <section className={zone.className} slot={zone.slot}>
    <Hide if={zone.offScreen}>
      {children}
    </Hide>
  </section>
