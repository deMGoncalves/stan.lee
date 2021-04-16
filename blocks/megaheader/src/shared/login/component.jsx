import h, { Show, Hide } from '@cea/h'
import Logoff from './logoff'
import Logon from './logon'

export default (login) =>
  <div>
    <Hide if={login.data}>
      <Logoff />
    </Hide>
    <Show if={login.data}>
      <Logon {...login.data} />
    </Show>
  </div>
