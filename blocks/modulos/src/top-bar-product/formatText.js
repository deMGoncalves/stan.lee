import * as f from '@cea/f'
import style from './style.css'

export default (text) => {
  const replaceStrong = f.replace(text, /\[b](.*?)\[\/b]/gmi, '<strong>$1</strong>')
  const replaceCoupon = f.replace(replaceStrong, /\[coupon](.*?)\[\/coupon]/gmi, `<span class="${style.topBar__coupon}">$1</span>`)

  return replaceCoupon
}