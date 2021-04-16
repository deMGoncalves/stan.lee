import h from '@cea/h'
import define from '@cea/modulos/src/define'
import Modulo from '@cea/modulos/src/modulo'
import LookGrid from '@cea/modulos/src/look-grid'
import style from './style.css'

function displayLookGrid (ev, tabId, id) {
  Array.from(document.querySelectorAll('.' + style.gridTabs__tab)).forEach(element => {
    element.id === ev.target.id
      ? ev.target.classList.add(style['gridTabs__tab--active'])
      : element.classList.remove(style['gridTabs__tab--active'])
  })
  Array.from(document.querySelectorAll(`[data-lookgrid-tab-id=${tabId}]`)).forEach(element => {
    if (element.id === id) {
      element.style.display = 'flex'
    } else {
      element.style.display = 'none'
    }
  })
}

define('grid-tabs', (props) =>
  <Modulo {...props}>
    <ul className={style.gridTabs}>
      {props.self.tabs.split('|').map((tab, i) => <li id={tab} onClick={ev => displayLookGrid(ev, props.self.tabId, props.self.tabsValue.split('|')[i])} className={[style.gridTabs__tab, i === 0 ? style['gridTabs__tab--active'] : '']} key={i}>{tab}</li>)}
    </ul>
    {props.self.tabsValue.split('|').map((tab, i) =>
      <LookGrid
        id={tab}
        data-lookgrid-tab-id={props.self.tabId}
        style={i === 0 ? 'display: flex' : 'display: none'}
        key={i}
        tab={tab}
        {...props}
      />)}
  </Modulo>)
