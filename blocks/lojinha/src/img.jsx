import h from '@cea/h'
import * as f from '@cea/f'

const redirectToCDN = (url) =>
  f.is(String, url)
    ? url.replace('appb2c-pages.s3.amazonaws.com', 'dpj1qgempagj9.cloudfront.net')
    : url

export default (attr) =>
  <picture>
    <source srcSet={redirectToCDN(f.or(attr.mobileUrl, attr.tabletUrl, attr.desktopUrl))} media='(max-width: 767px)' />
    <source srcSet={redirectToCDN(f.or(attr.tabletUrl, attr.mobileUrl, attr.desktopUrl))} media='(min-width: 768px) and (max-width: 959px)' />
    <source srcSet={redirectToCDN(f.or(attr.desktopUrl, attr.tabletUrl, attr.mobileUrl))} media='(min-width: 960px)' />
    <img
      className={attr.className}
      onClick={attr.onClick}
      loading='lazy'
      alt={f.or(attr.alt, '')} />
  </picture>