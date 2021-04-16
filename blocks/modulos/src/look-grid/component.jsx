import h from '@cea/h'
import Figure from '@cea/modulos/src/figure'
import Grid from '@cea/modulos/src/grid'
import style from './style.css'

export default (props) => {
  function count (props) {
    return props.self[`${props.tab}BracketFiveMobileImageUrl`]
      ? 'Five'
      : props.self[`${props.tab}BracketFourMobileImageUrl`]
        ? 'Four'
        : props.self[`${props.tab}BracketThreeMobileImageUrl`]
          ? 'Three'
          : props.self[`${props.tab}BracketTwoMobileImageUrl`]
            ? 'Two'
            : 'One'
  }

  function bannerLink (props) {
    const ids = [props.self[`${props.tab}BracketFiveId`],
      props.self[`${props.tab}BracketFourId`],
      props.self[`${props.tab}BracketThreeId`],
      props.self[`${props.tab}BracketTwoId`],
      props.self[`${props.tab}BracketOneId`]
    ]
    return '/compre-o-look?fq=' + ids.filter(Boolean).map(id => `productId:${id}`).join(',')
  }

  function scroll(ev) {
    let direction = ev.target.dataset.direction === "right" ? 1 : -1;
    let maxLeft = Math.min((window.innerWidth * .9), 530) * direction
    ev.target.parentNode.scroll({
      top: 0,
      left: maxLeft,
      behavior: 'smooth'
    })
    ev.target.dataset.direction = ev.target.dataset.direction === "right" ? "left" : "right";
  }

  return (<div>
    <div {...props} className={['look-grid', style.grid__block]} style={props.style}>
      <span className={style.grid__arrow} data-direction="right" onClick={e => scroll(e)} />
      <Figure
        utmiCampaign={props.self[`${props.tab}UtmiCampaign`]}
        mobileUrl={props.self[`${props.tab}BannerMobileImageUrl`]}
        tabletUrl={props.self[`${props.tab}BannerTabletImageUrl`]}
        desktopUrl={props.self[`${props.tab}BannerDesktopImageUrl`]}
        alt={props.self[`${props.tab}BannerAlt`]}
        onClick={() => window.open(bannerLink(props))}
        className={style.grid__banner}
      >
      </Figure>
      <Grid {...props} matriz={count(props)} />
    </div>
    <div className={style.grid__container}{...props} >
          <p className={[style[props.self.colorTransform], style.grid__title]}>{props.self[`${props.tab}BannerTitle`]}</p>
          <p className={[style.grid__subTitle, props.self[`${props.tab}ColorTransform`]]}>{props.self[`${props.tab}BannerDescription`]}</p>
          <a
            data-collect='internal-banner-link'
            data-collect-info={props.self[`${props.tab}UtmiCampaign`]}
            className={[style.grid__button, style[props.self.colorTransform]]}
            href={bannerLink(props)}
            title='confira o look'
          >
            confira o look
          </a>
    </div>
  </div>)
}
