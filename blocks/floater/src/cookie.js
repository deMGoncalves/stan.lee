import * as f from '@cea/f'

export default {
  getCookie: (cookieName) => {
    return  f.prop('[2]', document.cookie.match(`(^|;) ?${cookieName}=([^;]*)(;|$)`))
  },
  setCookie: (cookieName, expires) => {
    document.cookie = `${cookieName}=floaterClosed; expires=${new Date(new Date().getTime()+1000*60*60*24*expires).toGMTString()}; path=/`
    return
  }
}
  
