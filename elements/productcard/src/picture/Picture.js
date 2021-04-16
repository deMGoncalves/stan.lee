import { paint } from '@cea/h'
import * as f from '@cea/f'
import Component from './component.jsx'
@paint(Component)
class Picture {

  #altImage
  #className
  #images

  get altImage() {
    return this.#altImage
  }

  get className () {
    return this.#className
  }

  get imageDesktop () {
    return this.#images.desktop
  }

  get imageMobile () {
    return this.#images.mobile
  }

  get imageTablet () {
    return this.#images.tablet
  }

  constructor (props) {
    this.#altImage = f.prop('altImage', props)
    this.#images = f.prop('images', props)
    this.#className = f.prop('className', props)
  }

}
export default Picture
