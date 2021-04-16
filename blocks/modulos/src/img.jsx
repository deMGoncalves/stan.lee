import h from '@cea/h'
import * as f from '@cea/f'

const redirectToCDN = (url) =>
  f.is(String, url)
    ? url.replace('appb2c-pages.s3.amazonaws.com', 'dpj1qgempagj9.cloudfront.net')
    : url

const offScreen = (context, callBack, off = 500) =>
  ((context.getBoundingClientRect().top - off) < window.innerHeight) && callBack()

export default (props) => {
  function hook (img) {
    const srcSet = () => {
      const url = f.or(img.dataset.srcset, '')
        .split(', ')
        .map(source => source.split(' '))
        .filter(([_, width]) => parseFloat(width) <= window.innerWidth)
        .shift()[0]

      img.setAttribute('src', redirectToCDN(f.or(f.isEmpty(url), /undefined/i.test(url)) ? img.dataset.src : url))
    }

    const scroll = () =>
      offScreen(img, () => {
        srcSet()

        window.removeEventListener('scroll', scroll)
        window.addEventListener('resize', srcSet)
      })

    window.setTimeout(scroll, 250)
    window.addEventListener('scroll', scroll)

    return img
  }

  function altFallback () {
    try {
      return f.or(props.mobileUrl, props.tabletUrl, props.desktopUrl).trim().replace(/[\w\W]+\//i, '').replace(/(-|_|.jpg|.png|.jpeg|.gif)/g, ' ')
    } catch (_error) {
      return 'C&A!'
    }
  }

  return hook(
    <img
      className={[props.className, 'lazyload']}
      data-src={f.or(props.mobileUrl, props.tabletUrl, props.desktopUrl)}
      data-srcset={`${props.desktopUrl} 960w, ${props.tabletUrl} 768w, ${props.mobileUrl} 0w`}
      alt={f.or(props.alt, altFallback())}
    />
  )
}
