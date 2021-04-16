import { paint } from '@cea/h'
import * as f from '@cea/f'

import component from './component'
import cookie from './cookie'
import getRedirect from './getRedirect'
import testIsInternalURL from './testIsInternalURL'

@paint(component)
class Floater {
  #colorTransform
  #desktopImageUrl
  #expiresCookie
  #floaterAlign
  #floaterName
  #icon
  #mobileImageUrl
  #text
  #url
  #urlButton

  get colorTransform () {
    return this.#colorTransform
  }

  get cookieName () {
    return f.isNil(this.#floaterName) ? 'ceaFloater' : `ceaFloater${this.#floaterName}`
  }

  get cursorType () {
    return f.isNil(this.#url) ? 'cursor__default' : 'cursor__pointer'
  }

  get desktopImageUrl () {
    return this.#desktopImageUrl
  }

  get expiresCookie () {
    return f.or(this.#expiresCookie, 0.1)
  }

  get floaterAlign () {
    return f.or(this.#floaterAlign, 'right')
  }

  get icon () {
    return this.#icon
  }

  get mobileImageUrl () {
    return this.#mobileImageUrl
  }

  get urlButton () {
    return f.prop('[1]', this.#urlButton.split('|'))
  }

  get text () {
    return f.or(this.#text, '')
  }

  get textButton () {
    return f.prop('[0]', this.#urlButton.split('|'))
  }

  constructor (props) {
    this.#colorTransform = props.colorTransform
    this.#desktopImageUrl = props.desktopImageUrl
    this.#expiresCookie = props.daysExpiresCookie
    this.#floaterAlign = props.floaterAlign
    this.#floaterName = props.floaterName
    this.#icon = props.icon
    this.#mobileImageUrl = props.mobileImageUrl
    this.#text = props.text
    this.#url = props.url
    this.#urlButton = props.urlButton
  }

  closeFloater (className) {
    cookie.setCookie(this.cookieName, this.expiresCookie)
    // fechando dessa forma devido ao repaint não funcionar corretamente na home C&A
    f.prop('[0]', document.getElementsByClassName(className)).style.display = 'none'
    return this
  }

  getUrlTarget () {
    return testIsInternalURL(this.urlButton) ? '_self' : '_blank'
  }

  redirect () {
    return getRedirect(this.#url)
  }

  showFloater () {
    return f.not(cookie.getCookie(this.cookieName))
  }
}

export default Floater
