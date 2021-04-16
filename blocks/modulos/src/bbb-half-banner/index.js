define('bbb-half-banner', (props) => {
  const moduloB = {
    self: {
      bannerMobileImageUrl: props.self.bannerMobileImageUrlB,
      bannerTableImageUrl: props.self.bannerTabletImageUrlB,
      bannerDesktopImageUrl: props.self.bannerDesktopImageUrlB,
      bannerLink: props.self.bannerLinkB
    }
  }
  return (
    <Modulo {...props}>
      <div className='bbbHalfBanner__column'>
        <Banner {...props} />
      </div>
      <div className='bbbHalfBanner__column'>
        <Banner {...moduloB} />
      </div>
    </Modulo>
  )
})
