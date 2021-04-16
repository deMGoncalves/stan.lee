import h from '@cea/h'
import * as f from '@cea/f'
import radio from '@cea/radio'
import style from './style.css'

customElements.define('look-tab', class extends HTMLElement {
  get tabs () {
    return this
      .dataset
      .tabs
      .split('|')
  }

  get activeTab () {
    return this.__activeTab
  }

  connectedCallback () {
    this.__activeTab = 0
    this.render()
    return this
  }

  render () {
    this.innerHTML = ''
    this.appendChild(
      <div className={style.tab__list}>
        { this.tabs.map((t, i) =>
          <button
            className={[style.tab__btn, style[f.equal(i, this.activeTab)]]}
            onClick={() => this.selectTab(i)}>{ t }</button>)
        }
      </div>
    )
    return this
  }

  selectTab (i) {
    this.__activeTab = i
    this.render()
    radio.postMessage({ type: `look-grid:tab--${this.dataset.id}`, value: i })
    return this
  }
})
